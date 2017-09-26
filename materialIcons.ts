import { Icon, IconOptions } from 'leaflet';
import * as L from 'leaflet';

export interface MaterialIconOptions extends IconOptions {
  iconName?;
  iconColor?;
  iconXOffset?;
  iconYOffset?;
}

export class MaterialIcon extends Icon {
  options: MaterialIconOptions;

  constructor(options: IconOptions) {
    super(options);
  }

  createIcon() {

    const div = document.createElement('div');
    const options = this.options;

    if (options.iconName) {
      div.appendChild(this._createIcon());
    }

    return div;
  }

  _createIcon() {

    const options = this.options;

    // container div
    const iconDiv = L.DomUtil.create('div', 'leaflet-material-icons-markers');

    // feature icon
    const iconI = L.DomUtil.create('i', 'material-icons feature-icon');
    iconI.innerHTML = options.iconName;
    iconI.style.color = options.iconColor;
    iconI.style.textAlign = 'center';

    // XY position adjustments
    if(options.iconYOffset && options.iconYOffset !== 0) {
      iconI.style.marginTop = options.iconYOffset + 'px';
    }

    if(options.iconXOffset && options.iconXOffset !== 0) {
      iconI.style.marginLeft = options.iconXOffset + 'px';
    }

    const iconImg = document.createElement('div');
    iconImg.className = 'marker-icon';
    iconImg.innerHTML = '<img ' + 'src="' + options.iconUrl + '" ' + '</img>';
    iconImg.style.marginTop = '-41px';

    const shadowImg = document.createElement('div');
    shadowImg.className = 'marker-icon-shadow';
    shadowImg.innerHTML = '<img ' + 'src="' + options.shadowUrl + '" ' + '</img>';

    iconDiv.appendChild(shadowImg);
    iconDiv.appendChild(iconImg);
    iconDiv.appendChild(iconI);
    return iconDiv;
  }
}

