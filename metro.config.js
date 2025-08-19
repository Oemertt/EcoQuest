const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Füge .riv zu den unterstützten Asset-Erweiterungen hinzu
config.resolver.assetExts.push('riv');

module.exports = withNativeWind(config, { input: "./global.css" });
