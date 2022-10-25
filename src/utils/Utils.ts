import type { Area, Point, Size } from '../types';

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function restrictPositionCoord(
  position: number,
  imageSize: number,
  mediaSize: number,
  zoom: number,
): number {
  const maxPosition = (mediaSize * zoom) / 2 - imageSize / 2;

  return clamp(position, -maxPosition, maxPosition);
}

/**
 * Ensure a new media position stays in the crop area.
 */
export function restrictPosition(
  position: Point,
  cropSize: Size,
  imageSize: Size,
  zoom: number,
): Point {
  return {
    x: restrictPositionCoord(position.x, cropSize.width, imageSize.width, zoom),
    y: restrictPositionCoord(position.y, cropSize.height, imageSize.height, zoom),
  };
}

function flexiblePositionCoord(
  position: number,
  imageSize: number,
  mediaSize: number,
  zoom: number,
): number {
  const maxPosition = (mediaSize * zoom) / 2 - imageSize / 2;
  if (position > maxPosition) return maxPosition + (position - maxPosition) ** 0.7;
  if (position < -maxPosition) return -maxPosition - (-(position + maxPosition)) ** 0.7;
  return position;
}

/**
 * Ensure a new flexible position stays in the crop area.
 */
export function flexiblePosition(
  position: Point,
  cropSize: Size,
  imageSize: Size,
  zoom: number,
): Point {
  return {
    x: flexiblePositionCoord(position.x, cropSize.width, imageSize.width, zoom),
    y: flexiblePositionCoord(position.y, cropSize.height, imageSize.height, zoom),
  };
}

export function getDistanceBetweenPoints(pointA: Point, pointB: Point) {
  return Math.sqrt(
    (pointA.y - pointB.y) * (pointA.y - pointB.y) + (pointA.x - pointB.x) * (pointA.x - pointB.x),
  );
}

/**
 * Return the point that is the center of point a and b
 */
export function getCenter(a: Point, b: Point): Point {
  return {
    x: (b.x + a.x) / 2,
    y: (b.y + a.y) / 2,
  };
}

/**
 * Compute crop and zoom from the croppedAreaPixels
 */
export function getInitialCropFromCroppedAreaPixels(
  initialCroppedArea: Area,
  cropSize: Size,
  imageSize: Size,
  ratio: number,
): { initialCrop: Point; initialZoom: number } {
  const initialZoom = (cropSize.width * ratio) / initialCroppedArea.width;
  let initialCrop = {
    x:
      (imageSize.width * initialZoom - cropSize.width) / 2 -
      (initialZoom * initialCroppedArea.x) / ratio,
    y:
      (imageSize.height * initialZoom - cropSize.height) / 2 -
      (initialZoom * initialCroppedArea.y) / ratio,
  };
  initialCrop = restrictPosition(initialCrop, cropSize, imageSize, initialZoom);
  return { initialCrop, initialZoom };
}

export const createImage = async (url: string) =>
  new Promise((resolve, reject) => {
    const image: HTMLImageElement = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object
 */
export default async function getCroppedImg(imageSrc: string, pixelCrop: Area) {
  const image: any = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const safeArea = Math.max(image.width, image.height) * 2;

  canvas.width = safeArea;
  canvas.height = safeArea;

  if (!ctx) {
    return null;
  }

  const getRadianAngle = (degreeValue: number) => (degreeValue * Math.PI) / 180;

  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(0));
  ctx.translate(-safeArea / 2, -safeArea / 2);

  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, safeArea, safeArea);
  ctx.drawImage(image, safeArea / 2 - image.width * 0.5, safeArea / 2 - image.height * 0.5);

  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.putImageData(
    data,
    0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
    0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y,
  );

  // As Base64 string
  return canvas.toDataURL('image/jpeg');

  // As a blob
  // return new Promise((resolve, reject) => {
  //     canvas.toBlob(file => {
  //         resolve(URL.createObjectURL(file))
  //     }, 'image/jpeg')
  // })
}
