// JSON Datasets for Churches and Schools
var churches = [
  {name:"IMMACULATE CONCEPTION", lat:32.372932, lon:-112.863042},
  {name:"St. Francis of Assisi Mission", lat:33.030353, lon:-112.076184},
  {name:"St. Helena", lat:33.827756, lon:-109.112085},
  {name:"ASSUMPTION CHAPEL MISSION", lat:31.707674, lon:-111.061339},
  {name:"St. Rose Philippine Duchesne", lat:33.84459, lon:-112.122136},
  {name:"ST. GEORGE", lat:33.400795, lon:-111.541937},
  {name:"ST. FERDINAND CHAPEL", lat:31.575212, lon:-111.329268},
  {name:"St. Anne Mission", lat:35.222278, lon:-112.488644},
  {name:"St. Thomas Aquinas", lat:33.479025, lon:-112.355107},
  {name:"St. Francis of Assisi", lat:34.575593, lon:-113.179158},
  {name:"St. Peter", lat:33.137, lon:-111.87534},
  {name:"OUR LADY OF LOURDES", lat:31.966506, lon:-110.293647},
  {name:"ST. PATRICK", lat:31.443017, lon:-109.921352},
  {name:"St. Philip Benizi Mission", lat:34.063401, lon:-112.147927},
  {name:"Holy Family Mission", lat:33.043295, lon:-111.592225},
  {name:"OUR LADY OF GUADALUPE MISSION", lat:32.323422, lon:-109.484544},
  {name:"St. Henry", lat:33.420945, lon:-112.584224},
  {name:"St. Margaret Mary", lat:35.09513, lon:-114.591094},
  {name:"ST. KATERI TEKAKWITHA MISSION", lat:33.138868, lon:-110.124853},
  {name:"St. Frances Cabrini", lat:34.558261, lon:-111.86676},
  {name:"Our Lady of Joy", lat:33.819823, lon:-111.891131},
  {name:"ST. ANTHONY OF PADUA", lat:32.875804, lon:-111.751454},
  {name:"St. William", lat:33.43249, lon:-112.297095},
  {name:"St. Gabriel the Archangel", lat:33.783824, lon:-111.9757},
  {name:"St. Andrew the Apostle", lat:33.320399, lon:-111.900912},
  {name:"St. Columba Kim Mission", lat:33.327105, lon:-111.910943},
  {name:"St. Mary", lat:33.313519, lon:-111.847837},
  {name:"Our Lady of Fatima", lat:36.154602, lon:-109.560456},
  {name:"St. Catherine Laboure", lat:34.775918, lon:-112.452961},
  {name:"ST. AUGUSTINE CHURCH", lat:32.752914, lon:-111.781197},
  {name:"St. Catherine", lat:34.047862, lon:-110.48458},
  {name:"ST. JOSEPH CHAPEL MISSION", lat:33.410496, lon:-110.846113},
  {name:"SACRED HEART", lat:33.055615, lon:-109.305638},
  {name:"San Rafael", lat:34.478289, lon:-109.604724},
  {name:"Good Shepherd of the Desert", lat:34.161643, lon:-112.850299},
  {name:"ST. JAMES THE APOSTLE", lat:32.975441, lon:-111.522058},
  {name:"Immaculate Conception", lat:34.745643, lon:-111.969587},
  {name:"SACRED HEART CHURCH", lat:32.166376, lon:-112.125386},
  {name:"DATELAND MASS STATION", lat:32.806404, lon:-113.541049},
  {name:"Our Lady of the Desert Mission", lat:35.572286, lon:-114.30037},
  {name:"OUR LADY OF LA SALETTE MISSION", lat:31.466029, lon:-109.66411},
  {name:"IMMACULATE CONCEPTION", lat:31.344375, lon:-109.548645},
  {name:"SACRED HEART CHAPEL MISSION", lat:31.351735, lon:-109.55739},
  {name:"ST. LUKE", lat:31.349458, lon:-109.543185},
  {name:"ST. MARY’S MISSION", lat:32.714851, lon:-109.09919},
  {name:"Santa Teresita", lat:33.611556, lon:-112.319101},
  {name:"ST. FRANCIS OF ASSISI MISSION", lat:31.685467, lon:-109.683964},
  {name:"ST. HELEN OF THE CROSS", lat:32.757333, lon:-111.557666},
  {name:"Holy Trinity Newman Center", lat:35.190681, lon:-111.658978},
  {name:"San Francisco de Asis", lat:35.203119, lon:-111.627967}
];

var schools = [
  {name:"Roskruge Bilingual Magnet School", lat:32.22861, lon:-110.96333},
  {name:"C E Rose Elementary School", lat:32.17111, lon:-110.97917},
  {name:"Rolle School", lat:32.67806, lon:-114.59389},
  {name:"Roosevelt School", lat:33.39167, lon:-112.06639},
  {name:"Bicentennial Union High School", lat:33.775, lon:-113.60361},
  {name:"Roosevelt School", lat:32.2375, lon:-110.97361},
  {name:"Rocky Ridge School", lat:36.07194, lon:-110.59306},
  {name:"Rogers Elementary School", lat:32.21528, lon:-110.86444},
  {name:"Salt River Indian Day School", lat:33.46667, lon:-111.86389},
  {name:"Rock Point Boarding School", lat:36.71694, lon:-109.62028},
  {name:"Rose Lane Junior High School", lat:33.52667, lon:-112.05722},
  {name:"Roosevelt School", lat:32.71806, lon:-114.62611},
  {name:"Saint Ambrose School", lat:32.21833, lon:-110.93611},
  {name:"Saint Johns Indian School", lat:33.29, lon:-112.17361},
  {name:"Saint Isabel Mission", lat:36.41833, lon:-109.23111},
  {name:"Riverside School", lat:33.43444, lon:-112.17056},
  {name:"Saint Francis School", lat:32.69444, lon:-114.6275},
  {name:"Ritter School", lat:33.41972, lon:-111.92694},
  {name:"Saint Cyril School", lat:32.24389, lon:-110.89111},
  {name:"Royal Palm School", lat:33.56222, lon:-112.1},
  {name:"Saint Johns School", lat:32.17861, lon:-110.97833},
  {name:"Saint Thomas School", lat:33.50417, lon:-112.03111},
  {name:"Rucker School", lat:31.74361, lon:-109.48056},
  {name:"Sahuaro School", lat:33.60306, lon:-112.12917},
  {name:"Sahuaro School", lat:32.24028, lon:-111.08583},
  {name:"Rural School", lat:33.39417, lon:-111.92472},
  {name:"Saints Peter and Paul School", lat:32.24, lon:-110.94361},
  {name:"Richey Elementary School", lat:32.24833, lon:-110.98278},
  {name:"Barcelona School", lat:33.53167, lon:-112.15472},
  {name:"Reina Cleri Seminary", lat:32.20361, lon:-110.80361},
  {name:"Safford Junior High School", lat:32.21806, lon:-110.96639},
  {name:"Rincon High School", lat:32.2275, lon:-110.88861},
  {name:" Robison Elementary School", lat:32.21306, lon:-110.93139},
  {name:"Saint Josephs School", lat:32.21917, lon:-110.87417},
  {name:"Rough Rock Demonstration School", lat:36.4075, lon:-109.86083},
  {name:"Saint Peters Mission School", lat:33.13611, lon:-111.87472},
  {name:"Red Rock School", lat:36.59806, lon:-109.05806},
  {name:"Saint Simon and Jude School", lat:33.53111, lon:-112.11583},
  {name:"Saint Josephs Academy", lat:32.2275, lon:-110.84972},
  {name:"Saint Patrick School", lat:31.44306, lon:-109.92167},
  {name:"White Elementary School", lat:32.15139, lon:-111.01722},
  {name:"Thompson Valley School", lat:34.42167, lon:-112.91556},
  {name:"Elfrida Elementary School", lat:31.68611, lon:-109.67972},
  {name:"Xavier High School", lat:33.50528, lon:-112.06778},
  {name:"Apollo High School", lat:33.55472, lon:-112.15944},
  {name:"Bethune School", lat:33.43361, lon:-112.09167},
  {name:"Winter Wells School", lat:33.4225, lon:-112.86833},
  {name:"Huachuca City School", lat:31.63222, lon:-110.33278},
  {name:"Bowie Elementary School", lat:32.32472, lon:-109.48806},
  {name:"Pirtleville School", lat:31.36056, lon:-109.56861}
];

let map;
let churchMarkers = [];
let schoolMarkers = [];
let infoWindow;

function initMap() {
  // Initialize Google Map centered over Arizona
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.448376, lng: -112.074036 },
    zoom: 7,
    mapTypeControl: true, // Tile layer switcher (Roadmap, Satellite, etc.)
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_RIGHT
    }
  });

  infoWindow = new google.maps.InfoWindow();

  // Place Church Markers (Blue Icons)
  churches.forEach(place => {
    const marker = new google.maps.Marker({
      position: { lat: place.lat, lng: place.lon },
      map: map,
      title: place.name,
      icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    });

    marker.addListener("click", () => {
      infoWindow.setContent(`
        <div style="font-family: Arial; font-size: 13px;">
          <strong>${place.name}</strong><br>
          <strong>Latitude:</strong> ${place.lat}<br>
          <strong>Longitude:</strong> ${place.lon}
        </div>
      `);
      infoWindow.open(map, marker);
    });

    churchMarkers.push(marker);
  });

  // Place School Markers (Red Icons)
  schools.forEach(place => {
    const marker = new google.maps.Marker({
      position: { lat: place.lat, lng: place.lon },
      map: map,
      title: place.name,
      icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    });

    marker.addListener("click", () => {
      infoWindow.setContent(`
        <div style="font-family: Arial; font-size: 13px;">
          <strong>${place.name}</strong><br>
          <strong>Latitude:</strong> ${place.lat}<br>
          <strong>Longitude:</strong> ${place.lon}
        </div>
      `);
      infoWindow.open(map, marker);
    });

    schoolMarkers.push(marker);
  });

  // Event Listener for High Schools Checkbox
  document.getElementById("toggle-schools").addEventListener("change", (e) => {
    const visible = e.target.checked;
    schoolMarkers.forEach(marker => marker.setMap(visible ? map : null));
  });

  // Event Listener for Catholic Churches Checkbox
  document.getElementById("toggle-churches").addEventListener("change", (e) => {
    const visible = e.target.checked;
    churchMarkers.forEach(marker => marker.setMap(visible ? map : null));
  });
}

// Expose initMap globally so the Google Maps script callback can target it properly
window.initMap = initMap;