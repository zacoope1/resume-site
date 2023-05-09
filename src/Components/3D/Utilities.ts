import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Color } from "three";

export const GenerateRandomColor = (): Color =>
  new Color(Math.random(), Math.random(), Math.random());

// function for degrees to radians
export const DegreesToRadians = (degrees: number): number =>
  degrees * (Math.PI / 180);

// function for radians to degrees
export const RadiansToDegrees = (radians: number): number =>
  radians * (180 / Math.PI);

export const RandomNumberInRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export const StyledCanvas = styled(Canvas)`
  height: 100vh !important;
`;
