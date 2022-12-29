{
    "name": "Hello World", // Users will see this name in the extension manager
    "description": "A simple extension that add blocks which print \"Hello World\" or \"Goodbye World\" to the console.", // Also shown in the extension manager
    "version": "1.0.0", // Must be in format Major.Minor.Patch (see https://semver.org/)
    "ludumVersion": "1.0.0", // The version of Ludum this extension was made for
    "categories": [ // The categories that the extension adds to the left toolbox
        {
            "name": "Colors", // The name of the category
            "blocks": [ // The blocks that the category contains
                {
                    "type": "color_code", // The internal name of the block
                    "block": { // The block definition (see https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks)
                        init: function() {
                            this.appendDummyInput()
                                .appendField("Color")
                                .appendField(new Blockly.FieldColour("#ff0000"), "COLORCODE")
                                .appendField(new Blockly.FieldDropdown([
                                    ["RGB", "RGB"],
                                    ["HEX", "HEX"]
                                ]), "TYPE");
                            this.setOutput(true, null);
                            this.setColour(230);
                            this.setTooltip("Color3 a more general data type that describes RGB colors.");
                            this.setHelpUrl("https://create.roblox.com/docs/reference/engine/datatypes/Color3");
                        }
                    },
                    "generator": function(block) { // The Lua generator (see https://developers.google.com/blockly/guides/create-custom-blocks/generating-code)
                        return "print(\"Hello World\")\n";
                    }
                },
                {
                    "type": "color_code",
                    "block": {
                        init: function() {
                            this.appendDummyInput()
                                .appendField("Brickcolor")
                                .appendField(new Blockly.FieldDropdown([
                                    ["Earth green", "EARTHGREEN"],
                                    ["Slime green", "SLIMEGREEN"],
                                    ["Bright bluish green", "BRIGHTBLUISHGREEN"],
                                    ["Black", "BLACK"],
                                    ["Deep blue", "DEEPBLUE"],
                                    ["Dark blue", "DARKBLUE"],
                                    ["Navy blue", "NAVYBLUE"],
                                    ["Parsley green", "PARSLEYGREEN"],
                                    ["Dark green", "DARKGREEN"],
                                    ["Teal", "TEAL"],
                                    ["Smoky grey", "SMOKYGREY"],
                                    ["Steel blue", "STEELBLUE"],
                                    ["Storm blue", "STORMBLUE"],
                                    ["Lapis", "LAPIS"],
                                    ["Dark indigo", "DARKINDIGO"],
                                    ["Camo", "CAMO"],
                                    ["Sea green", "SEAGREEN"],
                                    ["Shamrock", "SHAMROCK"],
                                    ["Toothpaste", "TOOTHPASTE"],
                                    ["Sand blue", "SANDBLUE"],
                                    ["Medium blue", "MEDIUMBLUE"],
                                    ["Bright blue", "BRIGHTBLUE"],
                                    ["Really blue", "REALLYBLUE"],
                                    ["Mulberry", "MULBERRY"],
                                    ["Forest green", "FORESTGREEN"],
                                    ["Bright green", "BRIGHTGREEN"],
                                    ["Grime", "GRIME"],
                                    ["Lime green", "LIMEGREEN"],
                                    ["Pastel blue-green", "PASTELBLUE-GREEN"],
                                    ["Fossil", "FOSSIL"],
                                    ["Electric blue", "ELECTRICBLUE"],
                                    ["Lavender", "LAVENDER"],
                                    ["Royal purple", "ROYALPURPLE"],
                                    ["Eggplant", "EGGPLANT"],
                                    ["Sand green", "SANDGREEN"],
                                    ["Moss", "MOSS"],
                                    ["Artichoke", "ARTICHOKE"],
                                    ["Sage green", "SAGEGREEN"],
                                    ["Pastel light blue", "PASTELLIGHTBLUE"],
                                    ["Cadet blue", "CADETBLUE"],
                                    ["Cyan", "CYAN"],
                                    ["Alder", "ALDER"],
                                    ["Lilac", "LILAC"],
                                    ["Plum", "PLUM"],
                                    ["Bright violet", "BRIGHTVIOLET"],
                                    ["Olive", "OLIVE"],
                                    ["Br. yellowish green", "BR.YELLOWISHGREEN"],
                                    ["Olivine", "OLIVINE"],
                                    ["Laurel green", "LAURELGREEN"],
                                    ["Quill grey", "QUILLGREY"],
                                    ["Ghost grey", "GHOSTGREY"],
                                    ["Pastel Blue", "PASTELBLUE"],
                                    ["Pastel violet", "PASTELVIOLET"],
                                    ["Pink", "PINK"],
                                    ["Hot pink", "HOTPINK"],
                                    ["Magenta", "MAGENTA"],
                                    ["Crimson", "CRIMSON"],
                                    ["Deep orange", "DEEPORANGE"],
                                    ["New Yeller", "NEWYELLER"],
                                    ["Medium green", "MEDIUMGREEN"],
                                    ["Mint", "MINT"],
                                    ["Pastel green", "PASTELGREEN"],
                                    ["Light stone grey", "LIGHTSTONEGREY"],
                                    ["Light blue", "LIGHTBLUE"],
                                ]), "BRICKCOLORS");
                            this.setOutput(true, null);
                            this.setColour(230);
                            this.setTooltip("The BrickColor data type provides a predefined list of named colors instead of RGB Values.");
                            this.setHelpUrl("https://create.roblox.com/docs/reference/engine/datatypes/BrickColor");
                        }
                    },
                    "generator": function(block) {
                        return "print(\"Hello World\")\n";
                    }
                }
            ]
        }
    ]
}
