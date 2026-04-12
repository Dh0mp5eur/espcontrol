registerButtonType("sensor", {
  label: "Sensor",
  allowInSubpage: true,
  labelPlaceholder: "e.g. Living Room",
  onSelect: function (b) {
    b.entity = "";
    b.icon_on = "Auto";
  },
  renderSettings: function (panel, b, slot, helpers) {
    var sf = document.createElement("div");
    sf.className = "sp-field";
    sf.appendChild(helpers.fieldLabel("Sensor Entity"));
    var sensorInp = helpers.textInput(helpers.idPrefix + "sensor", b.sensor, "e.g. sensor.living_room_temperature");
    sf.appendChild(sensorInp);
    panel.appendChild(sf);
    helpers.bindField(sensorInp, "sensor", true);

    var uf = document.createElement("div");
    uf.className = "sp-field";
    uf.appendChild(helpers.fieldLabel("Unit"));
    var unitInp = helpers.textInput(helpers.idPrefix + "unit", b.unit, "e.g. \u00B0C");
    unitInp.className = "sp-input sp-input--narrow";
    uf.appendChild(unitInp);
    panel.appendChild(uf);
    helpers.bindField(unitInp, "unit", false);

    panel.appendChild(helpers.makeIconPicker(
      helpers.idPrefix + "icon-picker", helpers.idPrefix + "icon",
      b.icon || "Auto", function (opt) {
        b.icon = opt;
        helpers.saveField("icon", opt);
        renderPreview();
      }
    ));
  },
  renderPreview: function (b, helpers) {
    var label = b.label || b.sensor || "Sensor";
    return {
      labelHtml:
        '<span class="sp-btn-label-row"><span class="sp-btn-label">' + helpers.escHtml(label) + '</span>' +
        '<span class="sp-sensor-badge mdi mdi-gauge"></span></span>',
    };
  },
});
