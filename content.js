const copyright = "PablosCorner";
const websiteURL = "https://pabloscorner.github.io/PablosCorner-Website/";

const homeText = "Home";

const navBarContent = [
	["SM64 Editor Archives", "/PablosCorner-Website/archives", []],
	["Media", "", [
		["YouTube", "https://www.youtube.com/PablosCorner"],
		["Mastodon", "https://masto.ai/@pabloscorner"],
		["Odysee", "https://odysee.com/@PablosCorner"],
		["Twitch", "https://twitch.tv/PablosCorner"],
		["Bandcamp", "https://pabloscorner.bandcamp.com"]
	]],
	["Portfolio", "", [
		["Coming soon!", ""]
	]],
	["Discord", "https://www.discord.com/invite/3GCn9hfWNf", []]
];

const sm64ArchiveFolder = "/PablosCorner-Website/SM64EditorArchive";
const sm64ArchivePrefix = "SM64%20Editor%20";
const sm64ArchiveExt = "zip";

const sm64ArchivesContent = [
	["2.2", "12/8/2017", [
		"Support for extended OBJ format",
		"Support for vertex shading"
	]],
	["2.1.4", "11/2/2017", [
		"Minor bug fixes"
	]],
	["2.1.3", "10/3/2017", [
		"Further improvements to patching process",
		"Moved around some banks which weren't listed in the RAM map",
		"Fixed importer sometimes getting stuck infinitely importing the model"
	]],
	["2.1.2", "9/30/2017", [
		"Added option to reset ROM patches on misc tab",
		"More-efficient patching process",
		"Fixed patching order errors which may affect fresh ROMs",
		"Fix menu, Mario, and title skip tweaks to work on real hardware",
		"Updated RAM map"
	]],
	["2.1.1", "9/27/2017", [
		"Reverted byte-aligned bank patching for now, seems to cause issues"
	]],
	["2.1", "9/26/2017", [
		"Increased space for level models (non-custom entry point)",
		"Added option to ignore level size limit (be careful!)",
		"Added option to import to custom location",
		"RAM is set up for infinite polygons (emulator hacks needed above 8MB, collision still limited)",
		"Functionality for building a fresh level script when necessary",
		"Neater ROM patching process",
		"Removed texture and vertex limits",
		"Patching process aligns banks properly",
		"Opaque layer uses N64-compatible 0xFC command for non-fog"
	]],
	["2.0.9", "9/14/2017", [
		"Freed up more space for custom sound importing (you'll need to re-select instrument sets and song names)",
		"Fixed broken \"Mario (Ext.) - Bottom\" preset, re-apply the 0x04 bank extender tweak to fix your ROM",
		"Updated RAM/ROM map"
	]],
	["2.0.8", "9/6/2017", [
		"Added tweak for extended bank 0x04, and custom import presets which use the extra space for Mario's model",
		"Death floor still works if you didn't extend the boundaries"
	]],
	["2.0.7", "Released 7/5/2017", [
		"Fixed reading textures for models made in Blender and other programs",
		"Allocated music data 0x807C0000 when music hack disabled (best compatability), 0x803D0000 when enabled",
		"Fixed SFX in final Bowser stage, caused by allocation of music data in RAM",
		"Fixed two incorrectly labelled music tracks"
	]],
	["2.0.6", "Released 11/1/2016", [
		"Fixed scrolling textures not being removed correctly in the ROM",
		"Fixed level lists not being cleared after importing a level"
	]],
	["2.0.5", "Released 9/15/2016", [
		"Fixed a drawing-distance issue which would cause distortions on real N64 hardware",
		"Moved extended music data to 0x805E0000 to fix Bowser battle 3 level imports"
	]],
	["2.0.4", "Released 7/7/2016", [
		"Fixed fog not working for newer SketchUp models",
		"Fixed reading diffuse for Blender models",
		"Fixed reading models with no UV mapping",
		"Improved image processing speed",
		"Improved scaling of alpha layer"
	]],
	["2.0.3", "Released 7/5/2016", [
		"Fixed sometimes getting stuck in a permanent loop while importing",
		"Fixed incorrect naming of imported sequences",
		"Prettier icon"
	]],
	["2.0.2", "Released 7/4/2016", [
		"Corrected a RAM issue which would cause crashing in some ROMs",
		"Added a tweak for disabling the CRC",
		"Fixed CRC sometimes not updating",
		"Reduced size of converted display lists"
	]],
	["2.0.1", "Released 7/3/2016", [
		"Sequences as large as 0x24000 are now supported (twice the previous limit)",
		"Sequence data relocated in RAM to allow for larger collision data",
		"Fixed incorrect reading of diffuse resulting in a crash"
	]],
	["2.0", "7/3/2016", [
		["Model Conversion", [
			"Transparency is fully functional, use the sliders in Sketchup",
			"Refractive surfaces can be enabled by adding \"_ref\" to a material name",
			"Custom backgrounds are automatically resized and imported seamlessly",
			"Improved efficiency and speed of display list conversion",
			"Support for a large range of texture sizes (16x16, 8x32, 64x4, etc)",
			"Added automatic resizing of all incompatible texture dimensions",
			"Support for faces with no texture image, only a color",
			"Drawing layer in custom importer is chosen automatically",
			"Enabled death floors for custom importer",
			"Fixed importing of indexed textures",
			"Fixed some models not being centered correctly",
			"Fixed importing models which contain no opaque textures"
		]],
		["Music", [
			"Added ability to open Mario Kart 64 (U) ROM files and import music",
			"Added support for note velocity, MuseScore 2 recommended",
			"Added reverb setting for channels in XML converter",
			"Extracted sequences are also converted to a MIDI, incomplete",
			"Fixed low-pitch notes in XML converter",
			"Added option for sequences to play while the game is paused",
			"Fixed a bug with duplicate track names"
		]],
		["Interface", [
			"Imported level names are stored in the ROM",
			"Added Windows 10 support",
			"Various improvements to error-handling and interface",
			"Fixed reopening the same ROM/obj not re-reading the file",
			"Fixed mislabeled level/song names throughout the importer",
			"Fixed log files not displaying correctly in notepad"
		]],
		["Misc.", [
			"Replaced M64 ROM Extender and rom_expand_64.exe with queueRAM's sm64extend.exe",
			"Enabled negatives for floats in the tweak editor",
			"Format of \"Offset Polygon\" property of scrolling textures starts at 0 instead of 1"
		]]
	]],
	["1.9.5", "Released 1/16/2016", [
		"Fixed error handling on collision tab",
		"Fixed incorrect patching of Mario's shadow size/opacity",
		"Fixed PPF pointlessly modifying the Whomp King's star spawn location",
		"Included the updated RAM_map.txt",
		"Moved extended music data to 0x805C0000 for better compatibility"
	]],
	["1.9.4S", "Released 1/7/2016", [
		"Added option to ignore level size limit by holding alt-clicking 'Import Level'",
		"Improved navigation in collision editor",
		"Collision types are saved automatically",
		"Reorganized RAM usage and updated RAM map",
		"Three new tweaks by Kaze",
		"Fixed various mislabeled instruments",
		"Relocated scrolling texture routine to 0x1202400/0x80402400",
		"DMA copy code at 0x101B84 is only written after the first import",
		"Fixed custom importer's maximum offset ignoring the alpha display list size",
		"Removed bugged option of reverting title screen",
		"Various minor improvements to interface"
	]],
	["1.9.3S", "Released 2/12/2015", [
		"Fixed minor graphical errors caused by increased clipping distance",
		"It is recommended to re-import levels created in 1.9.2S",
		"Fixed crashing separate collision in custom importer",
		"File dialogue goes to last known directory if location is missing"
	]],
	["1.9.2S", "Released 1/30/2015", [
		"Increased 3D draw distance, no clipping in large levels",
		"Significant improvements to tweak syntax, you may need to manually update old tweaks",
		"Collision types work when importing without textures",
		"Enabled importing of alpha textures in custom importer",
		"Added three new water types",
		"Tweaks for changing cap music also fix the music in their corresponding level",
		"Tweak for changing ROM internal name",
		"Custom importer allows more space for title screen importing",
		"Fixed miscalculation causing custom BG to overwrite other levels",
		"Fixed miscalculation of bank 0x0E size",
		"Fixed slight misalignment of texture mapping",
		"Fixed collision not being centered in custom importer",
		"Fixed model offset position in custom importer",
		"Fixed incorrectly labeled music sequences",
		"Fixed mislabeled instruments and collision types",
		"Fixed bug in maximum size for custom importer",
		"DMA copy code at 0x101B84 is not rewritten every import",
		"Four new tweaks by Kaze",
		"Improved efficiency of display list conversion",
		"Further improvements to interface"
	]],
	["1.9.1S", "Released 6/28/2014", [
		"Allowed importing of a separate model for collision",
		"Added the option to apply a tweak automatically after importing",
		"Increased RCVI hack from 3x to 4x regular",
		"Reversed a change in display list conversion which would increase size",
		"Six new tweaks created by Kaze",
		"Minor changes to interface"
	]],
	["1.9S", "Released 12/24/2013", [
		"Added custom model importer and various presets",
		"Added tweak manager and various tweak files",
		"A basic hex editor is included in the miscellaneous tab",
		"Flawless obliteration of all stretched textures",
		"Removed polygon limit, though results may be unstable",
		"Skipping of opening has been moved in to the tweak manager",
		"Star requirement editing has been added to the tweak manager",
		"Can disable messages displayed after collecting certain amounts of stars",
		"Fixed loading of settings in 'Level Settings' tab",
		"Fixed collision parameter descriptions",
		"Updated collision type descriptions",
		"Fixed music silence bug which was incorrectly fixed in earlier versions",
		"Added palm tree to default geometry layouts",
		"Fixed conflicting model ID on TTM and RR 0x0E object banks",
		"Changed default import level to Bob-Omb's Battlefield",
		"Added option not to center the model",
		"Removed texture scale setting",
		"Minor interface improvements",
		"Improved efficiency of display list conversion"
	]],
];
