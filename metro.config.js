const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Füge .riv zu den unterstützten Asset-Erweiterungen hinzu
config.resolver.assetExts.push('riv');

// Add support for @legendapp/list
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Ensure proper module resolution
config.resolver.sourceExts = [...config.resolver.sourceExts, 'jsx', 'ts', 'tsx'];

module.exports = withNativeWind(config, { input: "./global.css" });
