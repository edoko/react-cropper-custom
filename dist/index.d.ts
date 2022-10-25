import { FC } from 'react';

type Area = {
  readonly width: number;
  readonly height: number;
  readonly x: number;
  readonly y: number;
};

interface CropperProps {
  readonly src: string;
  readonly width?: number;
  readonly height?: number;
  readonly aspect?: number;
  readonly zoom?: number;
  readonly minZoom?: number;
  readonly maxZoom?: number;
  readonly onZoomChange?: (zoom: number) => void;
  readonly onCropComplete: (croppedArea: Area) => void;
  readonly initialCroppedArea?: {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
  };
}

declare const Cropper: FC<CropperProps>;

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object
 */
declare function getCroppedImg(imageSrc: string, pixelCrop: Area): Promise<string | null>;

export { Cropper, getCroppedImg };
