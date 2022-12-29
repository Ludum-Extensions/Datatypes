{
    "name": "Luau Datatypes",
    "description": "A extension that adds Roblox Engine Data Types such as Color3 and CFrame.",
    "version": "1.0.0", // Must be in format Major.Minor.Patch (see https://semver.org/)
    "ludumVersion": "1.0.0", // The version of Ludum this extension was made for
    "categories": [ // The categories that the extension adds to the left toolbox
        {
            "name": "Datatypes", // The name of the category
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
                            this.setTooltip("Colors for all types of values in Roblox");
                            this.setHelpUrl("https://create.roblox.com/docs/reference/engine/datatypes/Color3");
                        }
                    },
                    "generator": function(block) { // The Lua generator (see https://developers.google.com/blockly/guides/create-custom-blocks/generating-code)
                        return "print(\"Hello World\")\n";
                    }
                }
            ]
        }
    ]
}
