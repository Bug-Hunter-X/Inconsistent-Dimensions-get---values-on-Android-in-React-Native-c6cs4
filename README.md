# Inconsistent Dimensions.get() values on Android in React Native

This repository demonstrates a common issue encountered when using the `Dimensions` API in React Native on Android. The `Dimensions.get('window')` or `Dimensions.get('screen')` methods may return inaccurate or inconsistent width and height values, leading to layout problems in your app.

The problem is particularly noticeable during orientation changes or on devices with varying screen densities. The solution explores alternative methods for reliably obtaining screen dimensions.

## Problem
The `Dimensions` API, while convenient, can be unreliable on Android due to factors like delayed updates after orientation changes or variations in how Android handles screen measurements.

## Solution
The provided solution demonstrates how to use event listeners for layout changes and calculate screen dimensions more reliably, thereby ensuring consistent layout behavior regardless of device or orientation.