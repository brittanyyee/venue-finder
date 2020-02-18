var map;
var markers = [];
var polygon = null;
var placeMarkers = [];

function initMap() {
        var options = {
            center: {
                lat: 32.7707,
                lng: -96.7970
            },
            zoom: 4.85,
            styles: [{
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#444444"
                    }]
                },
                {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{
                        color: "#f2f2f2"
                    }]
                },
                {
                    featureType: "landscape.natural.terrain",
                    elementType: "geometry",
                    stylers: [{
                            visibility: "off"
                        },
                        {
                            color: "#d64b4b"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                },
                {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{
                            saturation: -100
                        },
                        {
                            lightness: 45
                        },
                        {
                            color: "#ff0000"
                        },
                        {
                            visibility: "simplified"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [{
                            visibility: "simplified"
                        },
                        {
                            weight: "0.5"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{
                            visibility: "simplified"
                        },
                        {
                            color: "#fd1b14"
                        },
                        {
                            weight: "0.5"
                        },
                        {
                            saturation: "2"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                },
                {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [{
                        visibility: "simplified"
                    }]
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                },
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{
                            color: "#21373f"
                        },
                        {
                            visibility: "on"
                        }
                    ]
                }
            ],
            gestureHandling: 'greedy',
            mapTypeControl: false
        }
        
        var map = new google.maps.Map(document.getElementById('map'), options); 

        var zoomAutocomplete = new google.maps.places.Autocomplete(
            document.getElementById('zoom-to-area-text'));
            zoomAutocomplete.bindTo('bounds', map);

        var searchBox = new google.maps.places.SearchBox(
            document.getElementById('places-search'));
            searchBox.setBounds(map.getBounds());

            var markerCluster = new MarkerClusterer(map, gmarkers, {
              imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
          });

        var markers = [{
            coords: {
              lat: 37.253892,
              lng: -121.932172
            },
            content: '<h1>[24]7.ai</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.694274,
              lng: -121.921506
            },
            content: '<h1>10x Genomics</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 36.676275,
              lng: -121.65576
            },
            content: '<h1>1st Capital Bank</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.395146,
              lng: -122.078966
            },
            content: '<h1>23andMe</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.98705,
              lng: -122.26431
            },
            content: '<h1>24 Hour Fitness</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 33.663301,
              lng: -117.748183
            },
            content: '<h1>3 Day Blinds</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.85965,
              lng: -117.894951
            },
            content: '<h1>3PL</h1>' + '<h2>Transportation</h2>'
          },
          {
            coords: {
              lat: 33.452122,
              lng: -117.606198
            },
            content: '<h1>4 Star Electronics</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.026941,
              lng: -118.236618
            },
            content: '<h1>4Earth Farms</h1>' + '<h2>Transportation</h2>'
          },
          {
            coords: {
              lat: 34.137043,
              lng: -118.264827
            },
            content: '<h1>4over</h1>' + '<h2>Business</h2>'
          },
          {
            coords: {
              lat: 37.790163,
              lng: -122.397543
            },
            content: '<h1>6Sense</h1>' + '<h2>Business </h2>'
          },
          {
            coords: {
              lat: 37.373926,
              lng: -121.924134
            },
            content: '<h1>8x8</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.03756,
              lng: -118.441896
            },
            content: '<h1>99 CENTS ONLY STORES</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.389814,
              lng: -121.934918
            },
            content: '<h1>A10 Networks</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 36.85951,
              lng: -119.78403
            },
            content: '<h1>AALRR</h1>' + '<h2>Law Firms & Legal Services</h2>'
          },
          {
            coords: {
              lat: 32.884799,
              lng: -117.20464
            },
            content: '<h1>Abacus Data Systems</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.550329,
              lng: -122.292307
            },
            content: '<h1>ABD</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 37.781039,
              lng: -122.403032
            },
            content: '<h1>Able Services</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.744662,
              lng: -122.226741
            },
            content: '<h1>AbsolutData</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.711525,
              lng: -117.81904
            },
            content: '<h1>Absolute Exhibits</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.038603,
              lng: -117.522861
            },
            content: '<h1>AC Pro</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 32.936144,
              lng: -117.23498
            },
            content: '<h1>ACADIA Pharmaceuticals</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.766115,
              lng: -121.95366
            },
            content: '<h1>Accela</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.149114,
              lng: -118.133075
            },
            content: '<h1>ACCO Engineered Systems</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 33.662059,
              lng: -117.752462
            },
            content: '<h1>Accurate</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.410885,
              lng: -122.002089
            },
            content: '<h1>Accuray</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.041736,
              lng: -118.256869
            },
            content: '<h1>Ace Hotel</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 37.499019,
              lng: -122.215397
            },
            content: '<h1>AcelRx Pharmaceuticals</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.026435,
              lng: -117.967661
            },
            content: '<h1>Acorn Engineering</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 36.836543,
              lng: -119.804642
            },
            content: '<h1>Actagro</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.451271,
              lng: -122.12194
            },
            content: '<h1>Actian</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.681888,
              lng: -117.840235
            },
            content: '<h1>Action Property Management</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 37.381331,
              lng: -121.966242
            },
            content: '<h1>Actiontec Electronics</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.12495,
              lng: -117.289456
            },
            content: '<h1>Active Motif</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.019784,
              lng: -118.452553
            },
            content: '<h1>Activision Blizzard</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.858335,
              lng: -118.322086
            },
            content: '<h1>ActOne Group</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.435855,
              lng: -122.110646
            },
            content: '<h1>Adaptive Insights</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.356651,
              lng: -121.961118
            },
            content: '<h1>Adesto Technologies</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.330774,
              lng: -121.894283
            },
            content: '<h1>Adobe Systems</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.740098,
              lng: -118.028123
            },
            content: '<h1>Advance Storage Products</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.915269,
              lng: -118.347683
            },
            content: '<h1>Advanced Engine Management</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.382387,
              lng: -121.977487
            },
            content: '<h1>Advanced Micro Devices</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.452611,
              lng: -117.59672
            },
            content: '<h1>Advanced MP Technology</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.785199,
              lng: -122.197811
            },
            content: '<h1>Advanced Systems Group</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.710714,
              lng: -117.843692
            },
            content: '<h1>Advantage Solutions</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.772072,
              lng: -122.405536
            },
            content: '<h1>Aechelon Technology</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>AECOM</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 34.044836,
              lng: -118.264528
            },
            content: '<h1>AEG Worldwide</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 37.896838,
              lng: -122.074045
            },
            content: '<h1>AEI Consultants</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.500136,
              lng: -121.972335
            },
            content: '<h1>AER Worldwide</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.918882,
              lng: -118.394835
            },
            content: '<h1>Aerojet</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.255766,
              lng: -118.755733
            },
            content: '<h1>AeroVironment</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.177414,
              lng: -118.591958
            },
            content: '<h1>AFEX</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.792937,
              lng: -122.405207
            },
            content: '<h1>Affirm</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.649893,
              lng: -117.7106
            },
            content: '<h1>Agendia</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.400153,
              lng: -119.515858
            },
            content: '<h1>AGIA</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 33.858335,
              lng: -118.322086
            },
            content: '<h1>Agile•1</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.324986,
              lng: -121.998705
            },
            content: '<h1>Agilent Technologies</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.665019,
              lng: -117.920311
            },
            content: '<h1>Agility Fuel Solutions</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.504833,
              lng: -122.211955
            },
            content: '<h1>Agiloft</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 38.660722,
              lng: -121.181062
            },
            content: '<h1>AgreeYa Solutions</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.786234,
              lng: -116.406062
            },
            content: '<h1>Agua Caliente Casinos</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 37.674742,
              lng: -122.384362
            },
            content: '<h1>Aimmune Therapeutics</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.329391,
              lng: -121.862114
            },
            content: '<h1>Air Systems</h1>' + '<h2>Consumer Services</h2>'
          },
          {
            coords: {
              lat: 32.725112,
              lng: -117.161164
            },
            content: '<h1>Airbitz</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.772072,
              lng: -122.405536
            },
            content: '<h1>Airbnb</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 37.676466,
              lng: -122.389115
            },
            content: '<h1>Aircraft Technical Publishers</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.186307,
              lng: -118.459015
            },
            content: '<h1>AireSpring</h1>' + '<h2>Telecommunications</h2>'
          },
          {
            coords: {
              lat: 34.238976,
              lng: -118.563846
            },
            content: '<h1>Aitech</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.367231,
              lng: -121.91988
            },
            content: '<h1>AKM Semiconductor</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.139255,
              lng: -118.71039
            },
            content: '<h1>al-enterprise.com</h1>' + '<h2>Telecommunications</h2>'
          },
          {
            coords: {
              lat: 33.949274,
              lng: -117.36368
            },
            content: '<h1>Albert A. Webb Associates</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.222134,
              lng: -119.021523
            },
            content: '<h1>Alert Communications</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.70977,
              lng: -117.806471
            },
            content: '<h1>Alexander</h1>' + '<h2>Transportation</h2>'
          },
          {
            coords: {
              lat: 34.147985,
              lng: -118.142956
            },
            content: '<h1>Alexandria Real Estate</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.385924,
              lng: -121.901754
            },
            content: '<h1>AlfaTech</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 37.267881,
              lng: -121.794277
            },
            content: '<h1>Alien Technology</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.802647,
              lng: -117.84931
            },
            content: '<h1>Alignment Healthcare</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.800848,
              lng: -117.888289
            },
            content: '<h1>All Covered</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.744662,
              lng: -122.226741
            },
            content: '<h1>AllCells</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.763647,
              lng: -118.199583
            },
            content: '<h1>Alliance Inspection Management</h1>' + '<h2>Consumer Services</h2>'
          },
          {
            coords: {
              lat: 34.179003,
              lng: -118.600195
            },
            content: '<h1>Alliant Capital</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 33.662077,
              lng: -117.867054
            },
            content: '<h1>Alliant Insurance Services</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 33.832402,
              lng: -118.341001
            },
            content: '<h1>Allied Digital Services</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.732342,
              lng: -117.841938
            },
            content: '<h1>Allied Universal</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.871295,
              lng: -118.055856
            },
            content: '<h1>Allstate Floral</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 33.819788,
              lng: -118.042985
            },
            content: '<h1>Alltrade Tools Parts</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.678865,
              lng: -117.83794
            },
            content: '<h1>Alorica</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.13609,
              lng: -117.271487
            },
            content: '<h1>Alphatec Holdings</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.670635,
              lng: -117.83459
            },
            content: '<h1>Alteryx</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.809689,
              lng: -117.896458
            },
            content: '<h1>Altura Communication Solutions</h1>' + '<h2>Telecommunications</h2>'
          },
          {
            coords: {
              lat: 33.843616,
              lng: -117.536933
            },
            content: '<h1>Altura Credit Union</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 34.15173,
              lng: -118.694303
            },
            content: '<h1>AmaWaterways</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 37.501106,
              lng: -121.933222
            },
            content: '<h1>AMAX</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.023919,
              lng: -118.39345
            },
            content: '<h1>Amazon Studios</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 37.378438,
              lng: -121.960979
            },
            content: '<h1>Ambarella</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.354559,
              lng: -121.883844
            },
            content: '<h1>Ambiq Micro</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.593357,
              lng: -117.727591
            },
            content: '<h1>Ambry Genetics</h1>' + '<h2>Healthcare Services</h2>'
          },
          {
            coords: {
              lat: 33.787875,
              lng: -117.859921
            },
            content: '<h1>American Advisors Group</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 38.463407,
              lng: -122.718931
            },
            content: '<h1>American AgCredit</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 34.051541,
              lng: -118.253533
            },
            content: '<h1>American Business Bank</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.922653,
              lng: -117.870511
            },
            content: '<h1>American Financial Network</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.916723,
              lng: -118.402015
            },
            content: '<h1>American Golf</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 34.151465,
              lng: -118.771569
            },
            content: '<h1>American Homes 4 Rent</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 33.683474,
              lng: -117.844358
            },
            content: '<h1>American Medical Technologies</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 38.746124,
              lng: -121.243078
            },
            content: '<h1>American Pacific Mortgage</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 34.051341,
              lng: -118.256611
            },
            content: '<h1>American Realty Advisors</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 34.42304,
              lng: -119.7021
            },
            content: '<h1>American Riviera Bank</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 38.524684,
              lng: -122.801537
            },
            content: '<h1>American Tartaric Products</h1>' + '<h2></h2>'
          },
          {
            coords: {
              lat: 37.620384,
              lng: -122.13194
            },
            content: '<h1>American Technologies</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 33.946481,
              lng: -118.389976
            },
            content: '<h1>AmericanTours International</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 37.921308,
              lng: -122.014741
            },
            content: '<h1>Amerit Fleet Solutions</h1>' + '<h2>Consumer Services</h2>'
          },
          {
            coords: {
              lat: 34.175961,
              lng: -118.945108
            },
            content: '<h1>Amgen</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 32.951808,
              lng: -117.23947
            },
            content: '<h1>AMN Healthcare</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.488017,
              lng: -122.224996
            },
            content: '<h1>Amobee</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.116845,
              lng: -117.575591
            },
            content: '<h1>Amphastar Pharmaceuticals</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.786056,
              lng: -122.39866
            },
            content: '<h1>Amplitude</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.711174,
              lng: -121.713918
            },
            content: '<h1>AMS.net</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 38.230558,
              lng: -122.600947
            },
            content: '<h1>Amys Kitchen</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.841094,
              lng: -122.289892
            },
            content: '<h1>Amyris</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.785182,
              lng: -122.39869
            },
            content: '<h1>Anaplan</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 32.91071,
              lng: -117.106157
            },
            content: '<h1>Anchor General Insurance</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 34.136637,
              lng: -117.918667
            },
            content: '<h1>Ancra International</h1>' + '<h2>Transportation</h2>'
          },
          {
            coords: {
              lat: 37.420379,
              lng: -122.213742
            },
            content: '<h1>Andreessen Horowitz</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.486071,
              lng: -122.231199
            },
            content: '<h1>Anomali</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.155608,
              lng: -118.479693
            },
            content: '<h1>Answer Financial</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 33.709629,
              lng: -117.951352
            },
            content: '<h1>Antech Diagnostics</h1>' + '<h2>Healthcare Services</h2>'
          },
          {
            coords: {
              lat: 37.444077,
              lng: -122.161092
            },
            content: '<h1>Antworks</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.124257,
              lng: -117.325999
            },
            content: '<h1>AP Technology</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.387033,
              lng: -121.943472
            },
            content: '<h1>APCT</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.446885,
              lng: -122.162352
            },
            content: '<h1>Apercen Partners</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.075542,
              lng: -118.122639
            },
            content: '<h1>Apollo Medical Holdings</h1>' + '<h2>Hospitals & Physicians Clinics</h2>'
          },
          {
            coords: {
              lat: 37.336977,
              lng: -122.032912
            },
            content: '<h1>Apple</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.63005,
              lng: -117.605369
            },
            content: '<h1>Applied Medical</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.757008,
              lng: -122.420557
            },
            content: '<h1>Applied Underwriters</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 37.789298,
              lng: -122.397266
            },
            content: '<h1>AppsFlyer</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.789298,
              lng: -122.397266
            },
            content: '<h1>AppsFlyer</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.66456,
              lng: -117.670956
            },
            content: '<h1>Apria Healthcare</h1>' + '<h2>Healthcare Services</h2>'
          },
          {
            coords: {
              lat: 37.556019,
              lng: -122.287961
            },
            content: '<h1>Apttus</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.79258,
              lng: -122.403518
            },
            content: '<h1>Aravo</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.649679,
              lng: -117.719968
            },
            content: '<h1>Arbonne International</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.773303,
              lng: -121.960253
            },
            content: '<h1>ARC Document Solutions</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.901876,
              lng: -122.061995
            },
            content: '<h1>Archer Norris</h1>' + '<h2>Law Firms & Legal Services</h2>'
          },
          {
            coords: {
              lat: 33.789071,
              lng: -117.852778
            },
            content: '<h1>Architects Orange</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 37.377679,
              lng: -122.02942
            },
            content: '<h1>Arctic Wolf Networks</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 32.891514,
              lng: -117.185563
            },
            content: '<h1>Arena Pharmaceuticals</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>Ares Management</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 34.25364,
              lng: -118.562325
            },
            content: '<h1>Areté Associates</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.682766,
              lng: -117.850711
            },
            content: '<h1>Argent Management</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 37.411927,
              lng: -121.975997
            },
            content: '<h1>Arista Networks</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.385906,
              lng: -121.932683
            },
            content: '<h1>Arlo Technologies</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.773303,
              lng: -121.960253
            },
            content: '<h1>Armanino</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 32.717569,
              lng: -117.157845
            },
            content: '<h1>Arrowhead General Insurance Agency</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 33.120631,
              lng: -117.082842
            },
            content: '<h1>ARS National Services</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.792937,
              lng: -122.405207
            },
            content: '<h1>Arxan Technologies</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.767562,
              lng: -122.411142
            },
            content: '<h1>Asana</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.730265,
              lng: -117.844083
            },
            content: '<h1>Ascent Aerospace</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.138492,
              lng: -118.706256
            },
            content: '<h1>ASGN</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.672421,
              lng: -117.764394
            },
            content: '<h1>ASICS America</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.044836,
              lng: -118.264528
            },
            content: '<h1>ASM Global</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 32.928492,
              lng: -117.239072
            },
            content: '<h1>Aspera Technologies</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.367231,
              lng: -121.91988
            },
            content: '<h1>Aspire Systems</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.33693,
              lng: -121.889451
            },
            content: '<h1>Aspiring Minds</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.974594,
              lng: -122.031725
            },
            content: '<h1>AssetMark</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.49365,
              lng: -121.951743
            },
            content: '<h1>Asteelflash</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.637704,
              lng: -122.416282
            },
            content: '<h1>Astound Commerce</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.658754,
              lng: -122.400081
            },
            content: '<h1>Atara Bio</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.256356,
              lng: -119.229102
            },
            content: '<h1>Athena Cosmetics</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.133715,
              lng: -118.668029
            },
            content: '<h1>Atlas Development</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 32.874711,
              lng: -117.211804
            },
            content: '<h1>Atlas Realty</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 37.393285,
              lng: -121.932884
            },
            content: '<h1>Atlona</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.576501,
              lng: -122.044109
            },
            content: '<h1>Attivo Networks</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.653131,
              lng: -117.735515
            },
            content: '<h1>Auction.com</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 33.6504,
              lng: -117.746171
            },
            content: '<h1>Authority Partners</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.105853,
              lng: -117.575101
            },
            content: '<h1>Auto-Graphics</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.636901,
              lng: -117.740669
            },
            content: '<h1>AutoAlert</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.710139,
              lng: -117.807334
            },
            content: '<h1>AutoCrib</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 38.00547,
              lng: -122.530693
            },
            content: '<h1>Autodesk</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.583423,
              lng: -117.730356
            },
            content: '<h1>Avanir Pharmaceuticals</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.398719,
              lng: -121.976692
            },
            content: '<h1>Avaya</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.156763,
              lng: -118.257858
            },
            content: '<h1>Avery Dennison</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.607945,
              lng: -117.878704
            },
            content: '<h1>Aviation Capital Group</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.721091,
              lng: -117.802174
            },
            content: '<h1>Avid Bioservices, Inc.</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 32.874029,
              lng: -117.211185
            },
            content: '<h1>Axos Bank</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 34.042078,
              lng: -118.262567
            },
            content: '<h1>AXS</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 32.72793,
              lng: -117.15529
            },
            content: '<h1>Aya Healthcare</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.147895,
              lng: -118.071704
            },
            content: '<h1>Ayzenberg</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 32.772142,
              lng: -117.072536
            },
            content: '<h1>Aztec Shops</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.40619,
              lng: -122.0163
            },
            content: '<h1>Azul Systems</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.173296,
              lng: -118.599414
            },
            content: '<h1>B. Riley Financial</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.874138,
              lng: -122.300524
            },
            content: '<h1>Backroads</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 38.654861,
              lng: -121.452309
            },
            content: '<h1>Backyard Buildings</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 33.984008,
              lng: -118.111722
            },
            content: '<h1>BakeMark USA</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>Baker Commodities</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 33.107312,
              lng: -117.117057
            },
            content: '<h1>Baker Electric</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 33.535348,
              lng: -117.717946
            },
            content: '<h1>Bal Seal Engineering</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.665019,
              lng: -117.920311
            },
            content: '<h1>Balboa Water Group</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.70156,
              lng: -117.86446
            },
            content: '<h1>Banc Of California</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 34.061625,
              lng: -118.292121
            },
            content: '<h1>Bank of Hope</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 38.073591,
              lng: -122.542545
            },
            content: '<h1>Bank of Marin Bancorp</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.956515,
              lng: -121.287763
            },
            content: '<h1>Bank of Stockton</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 36.06693,
              lng: -119.015941
            },
            content: '<h1>Bank of the Sierra</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.792606,
              lng: -122.40044
            },
            content: '<h1>Bank of the West</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.900849,
              lng: -118.392208
            },
            content: '<h1>Banks.com</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 34.057981,
              lng: -118.422731
            },
            content: '<h1>Barkley Court Reporters</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.280113,
              lng: -121.953618
            },
            content: '<h1>Barracuda Networks</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.921308,
              lng: -122.014741
            },
            content: '<h1>Basic American Foods</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 38.018929,
              lng: -122.030313
            },
            content: '<h1>Bay Alarm</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.046044,
              lng: -122.015848
            },
            content: '<h1>Bay Photo Lab</h1>' + '<h2>Consumer Services</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>BCBGMAXAZRIAGROUP</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.801916,
              lng: -122.40112
            },
            content: '<h1>Bcci Construction Company</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 33.900849,
              lng: -118.392208
            },
            content: '<h1>BCG Digital Ventures</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.643836,
              lng: -117.717864
            },
            content: '<h1>BDSmktg</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.028933,
              lng: -118.460902
            },
            content: '<h1>Beachbody</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 33.909775,
              lng: -117.863794
            },
            content: '<h1>Beckman Coulter</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.788902,
              lng: -122.398149
            },
            content: '<h1>BehavioSec</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.723258,
              lng: -117.842695
            },
            content: '<h1>Behr Paint Company</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.339615,
              lng: -121.889766
            },
            content: '<h1>Bel Power Solutions</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>Belkin</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.907171,
              lng: -122.061956
            },
            content: '<h1>Bell-Carter Foods</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>Bella + Canvas</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 33.793032,
              lng: -117.49734
            },
            content: '<h1>Bellota</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.356309,
              lng: -119.044929
            },
            content: '<h1>Bend Pak</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.790937,
              lng: -122.401337
            },
            content: '<h1>Benefit Cosmetics</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 33.690095,
              lng: -117.883332
            },
            content: '<h1>BenQ America Corp.</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.909438,
              lng: -122.066269
            },
            content: '<h1>BERDING & WEIL</h1>' + '<h2>Law Firms & Legal Services</h2>'
          },
          {
            coords: {
              lat: 33.133186,
              lng: -117.239463
            },
            content: '<h1>Bergelectric</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 37.840095,
              lng: -122.290943
            },
            content: '<h1>Berkeley Lights</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.837272,
              lng: -122.301286
            },
            content: '<h1>Berkeley Research Group</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.544192,
              lng: -117.765976
            },
            content: '<h1>Berkshire Hathaway HomeServices California Properties</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 37.333714,
              lng: -121.894173
            },
            content: '<h1>Berliner Cohen</h1>' + '<h2>Law Firms & Legal Services</h2>'
          },
          {
            coords: {
              lat: 37.789808,
              lng: -122.401767
            },
            content: '<h1>Berman DeValerio</h1>' + '<h2>Law Firms & Legal Services</h2>'
          },
          {
            coords: {
              lat: 37.788601,
              lng: -122.398674
            },
            content: '<h1>Berry, Appleman & Leiden</h1>' + '<h2>Law Firms & Legal Services</h2>'
          },
          {
            coords: {
              lat: 34.156168,
              lng: -118.79845
            },
            content: '<h1>BestIT</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.047917,
              lng: -117.640487
            },
            content: '<h1>BestPack Packaging</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.970318,
              lng: -122.050864
            },
            content: '<h1>BevMo!</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.310794,
              lng: -118.747662
            },
            content: '<h1>Beyond Codes</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.91688,
              lng: -118.415024
            },
            content: '<h1>Beyond Meat</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 39.03993,
              lng: -122.921524
            },
            content: '<h1>Bicoastal Media</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 33.91685,
              lng: -118.375735
            },
            content: '<h1>Big 5 Sporting Goods</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.628905,
              lng: -122.115828
            },
            content: '<h1>Big Joe Lift</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 38.024118,
              lng: -122.279513
            },
            content: '<h1>Bio-Rad Laboratories</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.652109,
              lng: -117.70681
            },
            content: '<h1>BIOLASE</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 38.070425,
              lng: -122.532521
            },
            content: '<h1>BioMarin</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.024815,
              lng: -117.07743
            },
            content: '<h1>BioMed Realty Trust</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 32.941532,
              lng: -117.09865
            },
            content: '<h1>Biotix</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.662077,
              lng: -117.867054
            },
            content: '<h1>BirchStreet</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.428937,
              lng: -122.144391
            },
            content: '<h1>BirdEye</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.68758,
              lng: -122.415976
            },
            content: '<h1>BiRite FoodService</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.791242,
              lng: -122.397133
            },
            content: '<h1>Birst</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.324302,
              lng: -122.03878
            },
            content: '<h1>Bizmatics</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.678349,
              lng: -117.999037
            },
            content: '<h1>BJs Restaurants</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 37.524836,
              lng: -122.259007
            },
            content: '<h1>BKF</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 32.880882,
              lng: -117.203309
            },
            content: '<h1>bkm OfficeWorks</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.157447,
              lng: -118.425186
            },
            content: '<h1>Black Angus Steakhouses</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 37.973828,
              lng: -120.240141
            },
            content: '<h1>Black Oak Casino Resort</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 37.695366,
              lng: -121.921685
            },
            content: '<h1>Blackhawk Network</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 34.187795,
              lng: -118.596653
            },
            content: '<h1>BlackLine Systems</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.788707,
              lng: -122.401768
            },
            content: '<h1>Blackstone Technology Group</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.656906,
              lng: -117.768724
            },
            content: '<h1>Blizzard Entertainment</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.391474,
              lng: -121.931977
            },
            content: '<h1>Bloom Energy</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 34.065824,
              lng: -118.249462
            },
            content: '<h1>BLT Communications</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 38.584619,
              lng: -121.478665
            },
            content: '<h1>Blue Diamond Growers</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 38.401649,
              lng: -121.960375
            },
            content: '<h1>Blue Mountain Enterprises</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 37.791239,
              lng: -122.396457
            },
            content: '<h1>Blue Shield companies</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 37.398713,
              lng: -122.048036
            },
            content: '<h1>BlueJeans</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.487171,
              lng: -122.232071
            },
            content: '<h1>BlueVine</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.68999,
              lng: -121.930123
            },
            content: '<h1>Blume Global</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.792853,
              lng: -122.404275
            },
            content: '<h1>Blurb</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 37.787925,
              lng: -122.275842
            },
            content: '<h1>Blymyer Engineers</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 33.916723,
              lng: -118.402015
            },
            content: '<h1>BMC Group</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.062825,
              lng: -118.361867
            },
            content: '<h1>BMG group of companies UK</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 33.678349,
              lng: -117.999037
            },
            content: '<h1>Boardriders</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 32.874029,
              lng: -117.211185
            },
            content: '<h1>BofI Holding</h1>' + '<h2>Holding Companies & Conglomerates</h2>'
          },
          {
            coords: {
              lat: 34.057997,
              lng: -118.445973
            },
            content: '<h1>Boingo Wireless</h1>' + '<h2>Telecommunications</h2>'
          },
          {
            coords: {
              lat: 34.185609,
              lng: -117.936392
            },
            content: '<h1>BOLD</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.832402,
              lng: -118.341001
            },
            content: '<h1>Bolloré</h1>' + '<h2>Transportation</h2>'
          },
          {
            coords: {
              lat: 35.353937,
              lng: -118.990467
            },
            content: '<h1>Bolthouse Farms</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.151075,
              lng: -118.078547
            },
            content: '<h1>Bolton</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 32.766758,
              lng: -117.138353
            },
            content: '<h1>Borrego Solar Systems</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 33.999823,
              lng: -117.337466
            },
            content: '<h1>Bourns</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.480052,
              lng: -122.233541
            },
            content: '<h1>Box</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.66341,
              lng: -120.990112
            },
            content: '<h1>Boyd</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.082505,
              lng: -117.548019
            },
            content: '<h1>Bradshaw International</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.373436,
              lng: -121.912722
            },
            content: '<h1>BrandVia Alliance</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.133359,
              lng: -117.249443
            },
            content: '<h1>Breg</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.792785,
              lng: -122.404677
            },
            content: '<h1>BRIDGE Housing</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 33.853204,
              lng: -117.914757
            },
            content: '<h1>Bridgford Foods</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.537089,
              lng: -122.29714
            },
            content: '<h1>BrightEdge Technologies</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.778008,
              lng: -122.431272
            },
            content: '<h1>BrightTALK</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 37.406305,
              lng: -121.976549
            },
            content: '<h1>Brillio</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.065824,
              lng: -118.249462
            },
            content: '<h1>Bristol Farms</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 33.924571,
              lng: -117.886276
            },
            content: '<h1>Bristol Industries</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 38.645129,
              lng: -121.14144
            },
            content: '<h1>BRMS</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.649281,
              lng: -117.729203
            },
            content: '<h1>Broadcom</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.597434,
              lng: -120.955506
            },
            content: '<h1>Bronco Wine Company</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 38.594425,
              lng: -121.284839
            },
            content: '<h1>Brown and Caldwell</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 36.840331,
              lng: -119.803003
            },
            content: '<h1>BSK Associates</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 34.050848,
              lng: -118.260782
            },
            content: '<h1>Buchalter</h1>' + '<h2>Law Firms & Legal Services</h2>'
          },
          {
            coords: {
              lat: 33.117056,
              lng: -117.280987
            },
            content: '<h1>Buffini & Company</h1>' + '<h2>Education</h2>'
          },
          {
            coords: {
              lat: 37.778008,
              lng: -122.431272
            },
            content: '<h1>BuildZoom</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 32.755244,
              lng: -117.155903
            },
            content: '<h1>Bumble Bee Foods</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.889982,
              lng: -117.061312
            },
            content: '<h1>Burrtec Waste Industries, Inc.</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 33.822875,
              lng: -117.903949
            },
            content: '<h1>Buy Low Market</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.003897,
              lng: -118.263073
            },
            content: '<h1>C.R. Laurence Company</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.15424,
              lng: -118.077536
            },
            content: '<h1>C.W. Driver Companies</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 34.000764,
              lng: -117.918169
            },
            content: '<h1>C&F Foods</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.514289,
              lng: -122.202309
            },
            content: '<h1>C3 IoT</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.890464,
              lng: -118.225034
            },
            content: '<h1>CAbi</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 36.531544,
              lng: -119.586168
            },
            content: '<h1>Cache Creek Casino Resort</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 34.142541,
              lng: -117.988066
            },
            content: '<h1>Cacique</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.394528,
              lng: -121.920844
            },
            content: '<h1>Cadence Design Systems</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.778008,
              lng: -122.431272
            },
            content: '<h1>CAI International</h1>' + '<h2>Transportation</h2>'
          },
          {
            coords: {
              lat: 33.656906,
              lng: -117.768724
            },
            content: '<h1>CalAmp</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.729361,
              lng: -118.007188
            },
            content: '<h1>California Bank & Trust</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.808698,
              lng: -118.151981
            },
            content: '<h1>California Cartage</h1>' + '<h2>Transportation</h2>'
          },
          {
            coords: {
              lat: 37.553395,
              lng: -122.300233
            },
            content: '<h1>California Casualty Management</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 34.176355,
              lng: -118.24774
            },
            content: '<h1>California Credit Union</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.057046,
              lng: -120.822326
            },
            content: '<h1>California Dairies</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 38.580104,
              lng: -121.496008
            },
            content: '<h1>California Earthquake Authority</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 37.395969,
              lng: -121.978759
            },
            content: '<h1>California Eastern Laboratories</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 38.643672,
              lng: -121.148438
            },
            content: '<h1>California Independent Systems Operator</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 34.156585,
              lng: -118.483821
            },
            content: '<h1>California Pizza Kitchen</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 34.416808,
              lng: -118.575982
            },
            content: '<h1>California Resources</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 37.366632,
              lng: -121.911981
            },
            content: '<h1>California Water Service Group</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 37.385906,
              lng: -121.932683
            },
            content: '<h1>Calix</h1>' + '<h2>Telecommunications</h2>'
          },
          {
            coords: {
              lat: 32.65549,
              lng: -116.957932
            },
            content: '<h1>Call Center Services</h1>' + '<h2>Telecommunications</h2>'
          },
          {
            coords: {
              lat: 33.132122,
              lng: -117.281442
            },
            content: '<h1>Callaway Golf</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 33.87053,
              lng: -118.055054
            },
            content: '<h1>Calnetix</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.967863,
              lng: -120.410149
            },
            content: '<h1>CalPortland</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 32.717294,
              lng: -117.167878
            },
            content: '<h1>CalPrivate Bank</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.369814,
              lng: -121.919575
            },
            content: '<h1>Calsoft</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 38.57873,
              lng: -121.466786
            },
            content: '<h1>Caltronics</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.789318,
              lng: -122.400655
            },
            content: '<h1>Calypso Technology</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 38.247385,
              lng: -122.621969
            },
            content: '<h1>CamelBak</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.695268,
              lng: -121.900324
            },
            content: '<h1>Cameo Global</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.371482,
              lng: -122.056576
            },
            content: '<h1>Camino Pediatric Dentistry</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 35.367424,
              lng: -119.053268
            },
            content: '<h1>Cannon</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 33.972545,
              lng: -118.41532
            },
            content: '<h1>Canvas Worldwide</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>Canyon Partners</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>Capital Group</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 34.212078,
              lng: -118.46901
            },
            content: '<h1>Capstone Turbine</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.38933,
              lng: -121.958199
            },
            content: '<h1>Cardiva Medical</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.06191,
              lng: -118.416909
            },
            content: '<h1>Career Group</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.121741,
              lng: -117.288417
            },
            content: '<h1>Carlsbad Dance Centre</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 37.794343,
              lng: -122.395929
            },
            content: '<h1>Carmel Partners</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 37.926277,
              lng: -122.019352
            },
            content: '<h1>Carollo Engineers</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 33.82415,
              lng: -117.897707
            },
            content: '<h1>Carrington Mortgage Services</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 34.071482,
              lng: -118.357471
            },
            content: '<h1>Caruso Affiliated</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 34.144234,
              lng: -118.743349
            },
            content: '<h1>Casamba</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.194976,
              lng: -118.362559
            },
            content: '<h1>Cast & Crew Entertainment Services</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 35.369763,
              lng: -118.969794
            },
            content: '<h1>Castle & Cooke</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 37.79182,
              lng: -122.393591
            },
            content: '<h1>Castlight Health</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.749637,
              lng: -118.274588
            },
            content: '<h1>Catalina Express</h1>' + '<h2>Transportation</h2>'
          },
          {
            coords: {
              lat: 34.062194,
              lng: -118.238579
            },
            content: '<h1>Cathay General Bancorp</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.875123,
              lng: -122.517825
            },
            content: '<h1>Cavallo Point Healing Arts Center & Spa</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 37.406305,
              lng: -121.976549
            },
            content: '<h1>Cavisson Systems</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.061918,
              lng: -118.298682
            },
            content: '<h1>CBB Bank</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>CBRE</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>CBRE Global Investors</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.779833,
              lng: -122.389572
            },
            content: '<h1>CBS Interactive</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 33.993838,
              lng: -117.839384
            },
            content: '<h1>CDNetworks</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 37.371174,
              lng: -121.925672
            },
            content: '<h1>Celeno</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.000764,
              lng: -117.918169
            },
            content: '<h1>CEMCO</h1>' + '<h2>Minerals & Mining</h2>'
          },
          {
            coords: {
              lat: 33.804667,
              lng: -117.883771
            },
            content: '<h1>Centaurus Financial</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>Centerfield Media</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.921308,
              lng: -122.014741
            },
            content: '<h1>Central Garden & Pet</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 36.838898,
              lng: -119.770824
            },
            content: '<h1>Central Valley Community Bancorp</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.384137,
              lng: -121.982492
            },
            content: '<h1>Centrify</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.413502,
              lng: -122.003117
            },
            content: '<h1>Cepheid</h1>' + '<h2>Healthcare Services</h2>'
          },
          {
            coords: {
              lat: 33.696781,
              lng: -117.8508
            },
            content: '<h1>Cerno</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.785455,
              lng: -122.398017
            },
            content: '<h1>Certain</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 38.749983,
              lng: -121.252451
            },
            content: '<h1>Certent</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 32.900066,
              lng: -117.208026
            },
            content: '<h1>Certona</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 37.985819,
              lng: -122.047562
            },
            content: '<h1>Cerus</h1>' + '<h2>Healthcare Services</h2>'
          },
          {
            coords: {
              lat: 33.917849,
              lng: -118.395198
            },
            content: '<h1>Cetera Financial Group</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.388606,
              lng: -121.897062
            },
            content: '<h1>CH Reynolds</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 33.531349,
              lng: -117.16064
            },
            content: '<h1>Channell Commercial</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.268582,
              lng: -121.954826
            },
            content: '<h1>ChargePoint</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 37.790594,
              lng: -122.392699
            },
            content: '<h1>Charles Schwab</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.512729,
              lng: -122.25404
            },
            content: '<h1>Check Point</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.070016,
              lng: -118.350802
            },
            content: '<h1>CheckAlt</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.778008,
              lng: -122.431272
            },
            content: '<h1>Checkr</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.758668,
              lng: -121.959441
            },
            content: '<h1>Chevron</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 39.712581,
              lng: -121.791835
            },
            content: '<h1>Chico Paper</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 37.789203,
              lng: -122.403223
            },
            content: '<h1>Chime Bank</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.807644,
              lng: -122.409015
            },
            content: '<h1>Chinese Community Health Plan</h1>' + '<h2>Hospitals & Physicians Clinics</h2>'
          },
          {
            coords: {
              lat: 34.024321,
              lng: -118.372403
            },
            content: '<h1>Chinese Laundry Lifestyle</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 33.618309,
              lng: -117.872466
            },
            content: '<h1>Chipotle</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 37.815816,
              lng: -121.996984
            },
            content: '<h1>Choicelunch</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>ChowNow</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.535348,
              lng: -117.717946
            },
            content: '<h1>Chroma Systems Solutions</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.062604,
              lng: -118.353417
            },
            content: '<h1>Chrome River Technologies</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.779833,
              lng: -122.389572
            },
            content: '<h1>Chronicle Books</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 37.248997,
              lng: -119.697379
            },
            content: '<h1>Chukchansi Gold Resort & Casino</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 34.616136,
              lng: -120.094798
            },
            content: '<h1>Chumash Casino Resort</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 36.58534,
              lng: -121.857374
            },
            content: '<h1>CIG</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 37.562052,
              lng: -122.308504
            },
            content: '<h1>CIO Insight</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 34.389656,
              lng: -119.702652
            },
            content: '<h1>CIO Solutions</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.408358,
              lng: -121.954074
            },
            content: '<h1>Cisco Systems</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.071305,
              lng: -117.576873
            },
            content: '<h1>Citizens Business Bank</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.991039,
              lng: -118.217002
            },
            content: '<h1>Citizens of Humanity</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.778008,
              lng: -122.431272
            },
            content: '<h1>City and County of San Francisco, CA - San Francisco International Airport</h1>' + '<h2>Transportation</h2>'
          },
          {
            coords: {
              lat: 37.785455,
              lng: -122.398017
            },
            content: '<h1>Clarify Health Solutions</h1>' + '<h2>Healthcare Services</h2>'
          },
          {
            coords: {
              lat: 33.807195,
              lng: -118.024777
            },
            content: '<h1>Clarion of America</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.536926,
              lng: -122.324988
            },
            content: '<h1>Clarizen</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.003516,
              lng: -118.216848
            },
            content: '<h1>Classic Home</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.670691,
              lng: -117.863244
            },
            content: '<h1>Clean Energy Fuels</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 37.848154,
              lng: -122.290231
            },
            content: '<h1>Clif Bar & Company</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 32.774229,
              lng: -117.127794
            },
            content: '<h1>ClosingCorp</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.424819,
              lng: -122.139723
            },
            content: '<h1>Cloudera</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.780226,
              lng: -122.390466
            },
            content: '<h1>Cloudflare</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.391474,
              lng: -121.931977
            },
            content: '<h1>CloudGenix</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.785027,
              lng: -122.405195
            },
            content: '<h1>Clover Health</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 34.432731,
              lng: -119.863332
            },
            content: '<h1>CMC Rescue</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.780308,
              lng: -121.970839
            },
            content: '<h1>CMG Financial</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.830795,
              lng: -117.934468
            },
            content: '<h1>Coast Sign</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.272912,
              lng: -118.711665
            },
            content: '<h1>Coast to Coast</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.660172,
              lng: -120.456903
            },
            content: '<h1>CoastHills</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.420379,
              lng: -122.213742
            },
            content: '<h1>Coatue Management</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 32.896253,
              lng: -117.192243
            },
            content: '<h1>CognitiveTPG</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.395969,
              lng: -121.978759
            },
            content: '<h1>Coherent</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.522328,
              lng: -122.257913
            },
            content: '<h1>Coherus BioSciences</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.32916,
              lng: -121.894587
            },
            content: '<h1>Cohesity</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 32.943172,
              lng: -117.035944
            },
            content: '<h1>Cohu</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.732249,
              lng: -117.880826
            },
            content: '<h1>Collectors Universe</h1>' + '<h2>Transportation</h2>'
          },
          {
            coords: {
              lat: 34.051341,
              lng: -118.256611
            },
            content: '<h1>Colony Capital</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.918589,
              lng: -118.393719
            },
            content: '<h1>Columbus Technologies and Services</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 39.210445,
              lng: -122.009267
            },
            content: '<h1>Colusa Casino Resort</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 33.695645,
              lng: -117.837724
            },
            content: '<h1>Commerce Home Mortgage</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.695835,
              lng: -117.857311
            },
            content: '<h1>Commercial Bank of California</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.417521,
              lng: -122.138231
            },
            content: '<h1>Communications & Power Industries</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.030051,
              lng: -118.457733
            },
            content: '<h1>Company 3</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 33.832402,
              lng: -118.341001
            },
            content: '<h1>Compex Legal Services</h1>' + '<h2>Law Firms & Legal Services</h2>'
          },
          {
            coords: {
              lat: 37.486868,
              lng: -122.221163
            },
            content: '<h1>Comprehend Systems</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.221718,
              lng: -118.623512
            },
            content: '<h1>Computrition</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.496357,
              lng: -121.979836
            },
            content: '<h1>Concentrix</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.897578,
              lng: -121.280208
            },
            content: '<h1>Condor Earth Technologies</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 33.678349,
              lng: -117.999037
            },
            content: '<h1>Confie</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 34.026238,
              lng: -118.47545
            },
            content: '<h1>Connexity</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.000922,
              lng: -118.48001
            },
            content: '<h1>ConSol Partners</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.663153,
              lng: -117.746521
            },
            content: '<h1>Consolidated Fire Protection</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.687498,
              lng: -117.833164
            },
            content: '<h1>Consumer Portfolio Services</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.246757,
              lng: -118.504738
            },
            content: '<h1>Contemporary Services</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.558116,
              lng: -122.273105
            },
            content: '<h1>Conviva</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.414426,
              lng: -122.141518
            },
            content: '<h1>Cooley</h1>' + '<h2>Law Firms & Legal Services</h2>'
          },
          {
            coords: {
              lat: 33.922653,
              lng: -117.870511
            },
            content: '<h1>CoolSys</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 33.916723,
              lng: -118.402015
            },
            content: '<h1>Coppersmith</h1>' + '<h2>Transportation</h2>'
          },
          {
            coords: {
              lat: 34.071216,
              lng: -118.230103
            },
            content: '<h1>Cordoba</h1>' + '<h2>Transportation</h2>'
          },
          {
            coords: {
              lat: 33.972545,
              lng: -118.41532
            },
            content: '<h1>Core Digital Media</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.662362,
              lng: -122.392423
            },
            content: '<h1>Core-Mark International</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 33.650662,
              lng: -117.751706
            },
            content: '<h1>CoreLogic</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 34.028128,
              lng: -118.472556
            },
            content: '<h1>Cornerstone OnDemand</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.79491,
              lng: -122.399435
            },
            content: '<h1>Cornerstone Research</h1>' + '<h2>Law Firms & Legal Services</h2>'
          },
          {
            coords: {
              lat: 34.15084,
              lng: -118.133048
            },
            content: '<h1>Coronal Energy</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 33.457774,
              lng: -117.586075
            },
            content: '<h1>Corporate IT Solutions</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.552506,
              lng: -122.29233
            },
            content: '<h1>Corrigo</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.474342,
              lng: -121.935754
            },
            content: '<h1>Corsair</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.672421,
              lng: -117.764394
            },
            content: '<h1>CorVel</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.787925,
              lng: -122.275842
            },
            content: '<h1>Cost Plus World Market</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.553492,
              lng: -122.299489
            },
            content: '<h1>Coupa</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.058561,
              lng: -118.413149
            },
            content: '<h1>Cox, Castle & Nicholson</h1>' + '<h2>Law Firms & Legal Services</h2>'
          },
          {
            coords: {
              lat: 32.546793,
              lng: -116.994529
            },
            content: '<h1>CP Group</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.8106,
              lng: -118.002021
            },
            content: '<h1>CR&R</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 33.625354,
              lng: -117.722945
            },
            content: '<h1>Craft Silicon</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.860494,
              lng: -117.867851
            },
            content: '<h1>Craftech</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>Creative Artists Agency</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.062101,
              lng: -118.358605
            },
            content: '<h1>Creative Circle</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.328087,
              lng: -121.899754
            },
            content: '<h1>Creative Security</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.212917,
              lng: -118.445752
            },
            content: '<h1>Creative Technology</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.786609,
              lng: -122.405303
            },
            content: '<h1>Credit Karma</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.793273,
              lng: -122.395841
            },
            content: '<h1>CREDO Mobile</h1>' + '<h2>Telecommunications</h2>'
          },
          {
            coords: {
              lat: 34.047255,
              lng: -118.444651
            },
            content: '<h1>Crescent Capital Group</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.12972,
              lng: -117.28362
            },
            content: '<h1>Crestone Group</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.139271,
              lng: -117.274009
            },
            content: '<h1>Crissair</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.354559,
              lng: -121.883844
            },
            content: '<h1>Critchfield Mechanical</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 37.37783,
              lng: -122.03338
            },
            content: '<h1>Crowdstrike</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.14449,
              lng: -118.409977
            },
            content: '<h1>Crown Media Holdings</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 37.908748,
              lng: -122.066627
            },
            content: '<h1>CSE Insurance Group</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 37.423036,
              lng: -121.923161
            },
            content: '<h1>CSS Corp</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.04789,
              lng: -118.261531
            },
            content: '<h1>CTBC Bank</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.696781,
              lng: -117.8508
            },
            content: '<h1>CTC Global</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.065717,
              lng: -117.58755
            },
            content: '<h1>CU Direct</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 32.82154,
              lng: -117.128746
            },
            content: '<h1>Cubic</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.048642,
              lng: -118.25484
            },
            content: '<h1>Cumming</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 37.386112,
              lng: -122.065418
            },
            content: '<h1>Cumulus Networks</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.354559,
              lng: -121.883844
            },
            content: '<h1>Cupertino Electric</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 37.991666,
              lng: -122.117355
            },
            content: '<h1>Curriculum Associates</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.765746,
              lng: -118.077546
            },
            content: '<h1>Custom Building Products</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.652023,
              lng: -117.712999
            },
            content: '<h1>Custom Business Solutions</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 33.835289,
              lng: -118.259285
            },
            content: '<h1>Custom Goods</h1>' + '<h2>Transportation</h2>'
          },
          {
            coords: {
              lat: 37.693707,
              lng: -122.406104
            },
            content: '<h1>Cutera</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.317923,
              lng: -121.934707
            },
            content: '<h1>Cycle Gear</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 33.6504,
              lng: -117.746171
            },
            content: '<h1>Cylance</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.790396,
              lng: -122.404813
            },
            content: '<h1>Cypress Creek Renewables</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 37.410345,
              lng: -121.950653
            },
            content: '<h1>Cypress Semiconductor</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.652432,
              lng: -122.39494
            },
            content: '<h1>Cytokinetics</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.709629,
              lng: -117.951352
            },
            content: '<h1>D-Link</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.420379,
              lng: -122.213742
            },
            content: '<h1>D. E. Shaw</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 34.025229,
              lng: -117.989039
            },
            content: '<h1>Dacor</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.737138,
              lng: -117.240049
            },
            content: '<h1>Daniels Jewelers</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.740437,
              lng: -122.198739
            },
            content: '<h1>DASAN Zhone Solutions</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.818582,
              lng: -117.855671
            },
            content: '<h1>Data Aire</h1>' + '<h2>Minerals & Mining</h2>'
          },
          {
            coords: {
              lat: 37.791438,
              lng: -122.393559
            },
            content: '<h1>Databricks</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.92999,
              lng: -118.396867
            },
            content: '<h1>David&Goliath</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.04661,
              lng: -118.26273
            },
            content: '<h1>Davis Elen Advertising</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.636235,
              lng: -122.126025
            },
            content: '<h1>Davis Instruments</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 38.551673,
              lng: -121.564445
            },
            content: '<h1>DBI Beverage</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.792796,
              lng: -122.401353
            },
            content: '<h1>DCS Advisory</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 33.45592,
              lng: -117.598676
            },
            content: '<h1>DealerSocket</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.430772,
              lng: -119.863367
            },
            content: '<h1>Deckers Outdoor</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.959489,
              lng: -118.419376
            },
            content: '<h1>Decron Properties</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 37.783826,
              lng: -122.396438
            },
            content: '<h1>Deem</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.926902,
              lng: -122.02673
            },
            content: '<h1>Del Monte Foods</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.796187,
              lng: -121.226271
            },
            content: '<h1>Delicato Family Vineyards</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.514369,
              lng: -122.20056
            },
            content: '<h1>Delphix</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.606583,
              lng: -122.054176
            },
            content: '<h1>Delphon Industries</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.787594,
              lng: -122.396631
            },
            content: '<h1>Delta Partners</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.784629,
              lng: -122.398538
            },
            content: '<h1>Demandbase</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.755558,
              lng: -118.088459
            },
            content: '<h1>Dendreon</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.662076,
              lng: -120.468335
            },
            content: '<h1>DenMat</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.454995,
              lng: -122.166764
            },
            content: '<h1>Dermira</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.33693,
              lng: -121.889451
            },
            content: '<h1>Deskera</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.288463,
              lng: -121.935213
            },
            content: '<h1>DeWinter Group</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 32.907051,
              lng: -117.186216
            },
            content: '<h1>Dexcom</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.943596,
              lng: -118.408314
            },
            content: '<h1>DFS Group</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.240708,
              lng: -118.569471
            },
            content: '<h1>Diamond Game</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.144238,
              lng: -118.131033
            },
            content: '<h1>Diamond Parking</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 36.836433,
              lng: -119.829771
            },
            content: '<h1>DiBuduo & DeFendis Insurance Brokers</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 37.79491,
              lng: -122.399435
            },
            content: '<h1>Digital Realty Trust</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 34.186307,
              lng: -118.459015
            },
            content: '<h1>Digital Room</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 37.791927,
              lng: -122.400305
            },
            content: '<h1>Digital Shadows</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.152357,
              lng: -118.254999
            },
            content: '<h1>DineBrands</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 34.152357,
              lng: -118.254999
            },
            content: '<h1>DineBrands</h1>' + '<h2>Hospitality</h2>'
          },
          {
            coords: {
              lat: 33.203629,
              lng: -117.239309
            },
            content: '<h1>Directed</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.916723,
              lng: -118.402015
            },
            content: '<h1>DIRECTV</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 34.156874,
              lng: -118.325027
            },
            content: '<h1>Disney.com</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 37.431169,
              lng: -122.127302
            },
            content: '<h1>DisplayLink</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.393682,
              lng: -122.099388
            },
            content: '<h1>DNAnexus</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.779825,
              lng: -122.391934
            },
            content: '<h1>Docker</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.832402,
              lng: -118.341001
            },
            content: '<h1>DocMagic</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.79046,
              lng: -122.392105
            },
            content: '<h1>DocuSign</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 38.650964,
              lng: -121.188211
            },
            content: '<h1>Dokken Engineering</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 37.777522,
              lng: -122.415426
            },
            content: '<h1>Dolby Laboratories</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.136542,
              lng: -118.821533
            },
            content: '<h1>Dole Food Company</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 33.975996,
              lng: -118.448356
            },
            content: '<h1>DOLLAR SHAVE CLUB</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.084901,
              lng: -118.383144
            },
            content: '<h1>Donghia</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.961943,
              lng: -118.37135
            },
            content: '<h1>DoorKing</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.912525,
              lng: -121.234304
            },
            content: '<h1>Dorfman Pacific</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.020097,
              lng: -118.505041
            },
            content: '<h1>Douglas Emmett</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 34.22775,
              lng: -119.012098
            },
            content: '<h1>DP Technology</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.055448,
              lng: -117.554635
            },
            content: '<h1>DPI Specialty Foods</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.488535,
              lng: -122.217507
            },
            content: '<h1>DPR Construction</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 37.564371,
              lng: -122.321504
            },
            content: '<h1>Draeger</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 33.922653,
              lng: -117.870511
            },
            content: '<h1>DreamHost</h1>' + '<h2>Telecommunications</h2>'
          },
          {
            coords: {
              lat: 32.895147,
              lng: -117.148381
            },
            content: '<h1>DrJays.com</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.382379,
              lng: -122.037616
            },
            content: '<h1>Druva</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.672421,
              lng: -117.764394
            },
            content: '<h1>DryBar</h1>' + '<h2>Consumer Services</h2>'
          },
          {
            coords: {
              lat: 37.397076,
              lng: -121.890931
            },
            content: '<h1>DT Research</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.757543,
              lng: -118.089333
            },
            content: '<h1>DTS (Diversified Technical Systems)</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.697747,
              lng: -117.867001
            },
            content: '<h1>Ducommun</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.042035,
              lng: -117.267051
            },
            content: '<h1>Dudek</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 33.995014,
              lng: -118.260842
            },
            content: '<h1>Dunn-Edwards</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.016786,
              lng: -118.494724
            },
            content: '<h1>Dynamicweb</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.837112,
              lng: -122.308601
            },
            content: '<h1>Dynavax Technologies</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.837112,
              lng: -122.308601
            },
            content: '<h1>Dynavax Technologies</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.924564,
              lng: -117.546756
            },
            content: '<h1>E-Z UP</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.638136,
              lng: -120.942959
            },
            content: '<h1>E. & J. Gallo</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.80286,
              lng: -122.275412
            },
            content: '<h1>E.L.F</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.047829,
              lng: -118.442745
            },
            content: '<h1>E&S Ring Management</h1>' + '<h2>Real Estate</h2>'
          },
          {
            coords: {
              lat: 37.785199,
              lng: -122.197811
            },
            content: '<h1>East Bay Municipal Utility District</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 34.148197,
              lng: -118.14178
            },
            content: '<h1>East West Bank</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 32.783584,
              lng: -117.125615
            },
            content: '<h1>Eastridge Workforce Solutions</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.293311,
              lng: -121.905128
            },
            content: '<h1>eBay</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.59604,
              lng: -122.36525
            },
            content: '<h1>ECC</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 34.152876,
              lng: -118.150025
            },
            content: '<h1>eCivis</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 32.898775,
              lng: -117.198154
            },
            content: '<h1>ecoATM</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 33.86155,
              lng: -117.840542
            },
            content: '<h1>Econolite</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.841251,
              lng: -118.333214
            },
            content: '<h1>Edelbrock Corporation</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 32.99214,
              lng: -117.077257
            },
            content: '<h1>EDF Renewables North America</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 33.654904,
              lng: -117.866515
            },
            content: '<h1>Edison Energy</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 34.055948,
              lng: -117.756785
            },
            content: '<h1>Edison International</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 34.034608,
              lng: -118.466273
            },
            content: '<h1>Edmunds.com</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 33.658972,
              lng: -117.754126
            },
            content: '<h1>Edupoint Educational Systems</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.672421,
              lng: -117.764394
            },
            content: '<h1>Edwards Lifesciences</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 32.877657,
              lng: -117.210596
            },
            content: '<h1>EffectiveSoft</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.761907,
              lng: -122.414637
            },
            content: '<h1>EHDD</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 37.382387,
              lng: -121.977487
            },
            content: '<h1>eHealth</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 37.370348,
              lng: -121.924273
            },
            content: '<h1>eInfochips</h1>' + '<h2>Construction</h2>'
          },
          {
            coords: {
              lat: 32.903249,
              lng: -117.175734
            },
            content: '<h1>Einstein Medical</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.386534,
              lng: -122.084088
            },
            content: '<h1>Elastic</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.396798,
              lng: -122.146238
            },
            content: '<h1>Electric Power Research Institute</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.221718,
              lng: -118.623512
            },
            content: '<h1>Electro Rent</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.522886,
              lng: -122.253977
            },
            content: '<h1>Electronic Arts</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.545419,
              lng: -122.064962
            },
            content: '<h1>Electronics for Imaging, Inc.</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.384385,
              lng: -121.915536
            },
            content: '<h1>Elektrobit</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.410119,
              lng: -122.081872
            },
            content: '<h1>Elementum</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.057348,
              lng: -118.417459
            },
            content: '<h1>Elevate Services</h1>' + '<h2>Law Firms & Legal Services</h2>'
          },
          {
            coords: {
              lat: 32.771912,
              lng: -117.128768
            },
            content: '<h1>Elite Show Services</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.699277,
              lng: -121.881919
            },
            content: '<h1>Ellie Mae</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.663496,
              lng: -117.679518
            },
            content: '<h1>Ellison Educational Equipment</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.085466,
              lng: -118.13321
            },
            content: '<h1>EMCORE</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.497073,
              lng: -117.664976
            },
            content: '<h1>Emerald Expositions Events</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.535348,
              lng: -117.717946
            },
            content: '<h1>Emida Technologies</h1>' + '<h2>Telecommunications</h2>'
          },
          {
            coords: {
              lat: 34.090976,
              lng: -118.373686
            },
            content: '<h1>Emser Tile</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.583423,
              lng: -117.730356
            },
            content: '<h1>Enclarity</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 32.774229,
              lng: -117.127794
            },
            content: '<h1>Encore Capital Group</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.067632,
              lng: -118.403541
            },
            content: '<h1>Endeavor</h1>' + '<h2>Holding Companies & Conglomerates</h2>'
          },
          {
            coords: {
              lat: 34.164518,
              lng: -118.37469
            },
            content: '<h1>Endemol Shine Groups companies</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 32.559461,
              lng: -116.936623
            },
            content: '<h1>Energy Labs</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.708373,
              lng: -122.183189
            },
            content: '<h1>Energy Recovery</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.020737,
              lng: -118.397773
            },
            content: '<h1>Engineer.ai</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 34.136542,
              lng: -118.821533
            },
            content: '<h1>eNoah</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.474342,
              lng: -121.935754
            },
            content: '<h1>Enphase Energy</h1>' + '<h2>Energy, Utilities & Waste</h2>'
          },
          {
            coords: {
              lat: 34.277086,
              lng: -118.799348
            },
            content: '<h1>Entertainment Earth</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.156514,
              lng: -118.341487
            },
            content: '<h1>Entertainment Partners</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.021711,
              lng: -118.479052
            },
            content: '<h1>Entravision Communications</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 37.66341,
              lng: -120.990112
            },
            content: '<h1>Enviro Tech Chemical Services</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.792796,
              lng: -122.401353
            },
            content: '<h1>EPIC Insurance Brokers</h1>' + '<h2>Insurance</h2>'
          },
          {
            coords: {
              lat: 34.068163,
              lng: -117.210161
            },
            content: '<h1>EPIC Management LP</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 33.900333,
              lng: -118.306898
            },
            content: '<h1>EpiSource</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 33.664925,
              lng: -117.705408
            },
            content: '<h1>Epoch Universal</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.52658,
              lng: -122.206273
            },
            content: '<h1>Equinix</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 34.05513,
              lng: -118.25703
            },
            content: '<h1>Ergobaby</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.007252,
              lng: -118.146317
            },
            content: '<h1>Ernest Packaging Solutions</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.067449,
              lng: -118.398208
            },
            content: '<h1>Ervin Cohen & Jessup</h1>' + '<h2>Law Firms & Legal Services</h2>'
          },
          {
            coords: {
              lat: 32.717294,
              lng: -117.167878
            },
            content: '<h1>ES3s</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 34.057279,
              lng: -117.194186
            },
            content: '<h1>Esri</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.436207,
              lng: -121.892013
            },
            content: '<h1>Estuate</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 38.508163,
              lng: -122.467155
            },
            content: '<h1>ETS Laboratories</h1>' + '<h2>Hospitals & Physicians Clinics</h2>'
          },
          {
            coords: {
              lat: 32.809897,
              lng: -117.121391
            },
            content: '<h1>Event Network</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 37.82023,
              lng: -122.374078
            },
            content: '<h1>Eventbrite</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 37.837272,
              lng: -122.301286
            },
            content: '<h1>EVERSANA</h1>' + '<h2>Retail</h2>'
          },
          {
            coords: {
              lat: 34.146277,
              lng: -118.131887
            },
            content: '<h1>Evertrust Bank</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.56572,
              lng: -122.32469
            },
            content: '<h1>Evidation Health</h1>' + '<h2>Media & Internet</h2>'
          },
          {
            coords: {
              lat: 33.715217,
              lng: -117.783228
            },
            content: '<h1>Evisions</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.921308,
              lng: -122.014741
            },
            content: '<h1>Exadel</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 38.463407,
              lng: -122.718931
            },
            content: '<h1>Exchange Bank</h1>' + '<h2>Finance</h2>'
          },
          {
            coords: {
              lat: 37.744662,
              lng: -122.226741
            },
            content: '<h1>Exelixis</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.499468,
              lng: -122.143871
            },
            content: '<h1>Exponent</h1>' + '<h2>Business Services</h2>'
          },
          {
            coords: {
              lat: 37.840095,
              lng: -122.290943
            },
            content: '<h1>Exponential Interactive</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.784913,
              lng: -122.410747
            },
            content: '<h1>Extentia Information Technology</h1>' + '<h2>Software</h2>'
          },
          {
            coords: {
              lat: 37.726554,
              lng: -122.390633
            },
            content: '<h1>Extranomical Tours</h1>' + '<h2>Consumer Services</h2>'
          },
          {
            coords: {
              lat: 37.238253,
              lng: -121.785118
            },
            content: '<h1>Extreme Networks</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 33.818671,
              lng: -117.897143
            },
            content: '<h1>Extron</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.486504,
              lng: -121.941114
            },
            content: '<h1>Exxact</h1>' + '<h2>Manufacturing</h2>'
          },
          {
            coords: {
              lat: 37.84281,
              lng: -122.290437
            },
            content: '<h1>F real Foods < /h1>' + '<h2>Hospitality</h2 > ' }, {
              coords: {
                lat: 37.482058,
                lng: -122.150364
              },
              content: '<h1>Facebook</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 37.369543,
                lng: -121.915345
              },
              content: '<h1>Fair Isaac</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 32.894984,
                lng: -117.198778
              },
              content: '<h1>Fairfield Residential</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 33.857198,
                lng: -118.013306
              },
              content: '<h1>Fairmont Designs</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 32.938705,
                lng: -117.197521
              },
              content: '<h1>Fairmont Grand Del Mar</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 34.075709,
                lng: -118.393838
              },
              content: '<h1>Fandango</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 33.727371,
                lng: -116.197159
              },
              content: '<h1>Fantasy Springs Resort Casino</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 33.900333,
                lng: -118.306898
              },
              content: '<h1>Faraday & Future</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.791447,
                lng: -122.402626
              },
              content: '<h1>Farella Braun + Martel</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 36.545994,
                lng: -119.40395
              },
              content: '<h1>Farm Credit West</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 34.184593,
                lng: -118.602126
              },
              content: '<h1>Farmers Insurance</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 34.002436,
                lng: -118.218467
              },
              content: '<h1>Fashion Nova</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.778008,
                lng: -122.431272
              },
              content: '<h1>Fastly</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.076244,
                lng: -118.368146
              },
              content: '<h1>FastPay</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.537249,
                lng: -122.297623
              },
              content: '<h1>FCE Benefit Administrators</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 39.498795,
                lng: -121.566412
              },
              content: '<h1>Feather Falls Casino</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 37.792785,
                lng: -122.404677
              },
              content: '<h1>Federal Home Loan Bank of San Francisco</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 34.175053,
                lng: -118.590635
              },
              content: '<h1>Feedonomics</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.908208,
                lng: -122.067508
              },
              content: '<h1>Fehr & Peers</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.391175,
                lng: -122.081312
              },
              content: '<h1>Fenwick & West LLP</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 33.514143,
                lng: -117.185753
              },
              content: '<h1>FFF Enterprises</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.766495,
                lng: -122.387812
              },
              content: '<h1>Fibrogen</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.406337,
                lng: -121.983182
              },
              content: '<h1>Filemaker</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.391474,
                lng: -121.931977
              },
              content: '<h1>Filice Insurance Agency</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 37.40452,
                lng: -122.03597
              },
              content: '<h1>Financial Engines Advisors</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 37.789318,
                lng: -122.400655
              },
              content: '<h1>FinancialForce</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.41251,
                lng: -122.00172
              },
              content: '<h1>Finisar</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.423036,
                lng: -121.923161
              },
              content: '<h1>FireEye</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.701095,
                lng: -117.862769
              },
              content: '<h1>First American Financial</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 37.656418,
                lng: -122.401074
              },
              content: '<h1>First Databank</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>First Legal</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 37.792226,
                lng: -122.399086
              },
              content: '<h1>First Republic Bank</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.660288,
                lng: -117.754845
              },
              content: '<h1>First Team</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 37.537721,
                lng: -122.256237
              },
              content: '<h1>First Virtual Communications</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.662362,
                lng: -122.392423
              },
              content: '<h1>Five Prime Therapeutics</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 38.743624,
                lng: -121.244047
              },
              content: '<h1>Five Star Bank</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 37.769592,
                lng: -121.96778
              },
              content: '<h1>Five9</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.358477,
                lng: -121.900251
              },
              content: '<h1>Flagship Facility Services</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.652916,
                lng: -117.863962
              },
              content: '<h1>Fletcher Jones Management Group</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.417992,
                lng: -121.979301
              },
              content: '<h1>Flex</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 38.779853,
                lng: -121.275156
              },
              content: '<h1>FLEXCARE</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.786609,
                lng: -122.405303
              },
              content: '<h1>Flexport</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.177698,
                lng: -118.454307
              },
              content: '<h1>FloQast</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.653515,
                lng: -122.344612
              },
              content: '<h1>Fluidigm</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.516323,
                lng: -117.661655
              },
              content: '<h1>Fluidmaster</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>Flying Food Group</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.790937,
                lng: -122.401337
              },
              content: '<h1>Flynn Restaurant Group</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 32.986957,
                lng: -117.067057
              },
              content: '<h1>FMG Suite</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.524369,
                lng: -122.265779
              },
              content: '<h1>Folio3</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.409509,
                lng: -121.954716
              },
              content: '<h1>ForeScout Technologies</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.071486,
                lng: -118.19797
              },
              content: '<h1>Forever 21</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.791034,
                lng: -122.394768
              },
              content: '<h1>ForgeRock</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.714493,
                lng: -121.708244
              },
              content: '<h1>FormFactor</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.376149,
                lng: -122.010778
              },
              content: '<h1>Fortinet</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 36.84215,
                lng: -119.775027
              },
              content: '<h1>Forward Advantage</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 32.770622,
                lng: -117.143219
              },
              content: '<h1>Forward Slope</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.390854,
                lng: -120.720448
              },
              content: '<h1>Foster Farms</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.034063,
                lng: -118.455929
              },
              content: '<h1>Fox Interactive Media</h1>' + '<h2>Telecommunications</h2>'
            },
            {
              coords: {
                lat: 33.945112,
                lng: -118.376327
              },
              content: '<h1>Fox Rent A Car</h1>' + '<h2>Consumer Services</h2>'
            },
            {
              coords: {
                lat: 34.049938,
                lng: -118.411289
              },
              content: '<h1>Fox Searchlight Pictures</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 34.049938,
                lng: -118.411289
              },
              content: '<h1>Fox Sports</h1>' + '<h2>Telecommunications</h2>'
            },
            {
              coords: {
                lat: 38.643045,
                lng: -121.183973
              },
              content: '<h1>FPI Management</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 34.139271,
                lng: -117.274009
              },
              content: '<h1>Fralock</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 32.66624,
                lng: -117.108931
              },
              content: '<h1>Frank Subaru</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 37.562052,
                lng: -122.308504
              },
              content: '<h1>Franklin Templeton</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 34.02963,
                lng: -118.168648
              },
              content: '<h1>Frasco</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.78891,
                lng: -118.141999
              },
              content: '<h1>FreeConferenceCall</h1>' + '<h2>Telecommunications</h2>'
            },
            {
              coords: {
                lat: 37.545885,
                lng: -122.05318
              },
              content: '<h1>Fremont Bank</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.730477,
                lng: -116.257812
              },
              content: '<h1>Fresh Express</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.558507,
                lng: -122.31064
              },
              content: '<h1>Freshworks</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.981314,
                lng: -120.382499
              },
              content: '<h1>Front Porch</h1>' + '<h2>Telecommunications</h2>'
            },
            {
              coords: {
                lat: 37.380105,
                lng: -121.907145
              },
              content: '<h1>Frys Electronics</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.916723,
                lng: -118.402015
              },
              content: '<h1>Fujitsu Glovia</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.13925,
                lng: -117.276187
              },
              content: '<h1>Fusion Factor</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.643334,
                lng: -117.721836
              },
              content: '<h1>Futek</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.678349,
                lng: -117.999037
              },
              content: '<h1>G&M Oil</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.66341,
                lng: -120.990112
              },
              content: '<h1>G3 Enterprises</h1>' + '<h2>Transportation</h2>'
            },
            {
              coords: {
                lat: 32.72793,
                lng: -117.15529
              },
              content: '<h1>Gafcon</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.535026,
                lng: -122.257862
              },
              content: '<h1>Gainsight</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.954298,
                lng: -118.049523
              },
              content: '<h1>Galleher</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.227555,
                lng: -118.469213
              },
              content: '<h1>Galpin Motors</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.790726,
                lng: -122.391066
              },
              content: '<h1>Gap Inc</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.151552,
                lng: -118.24455
              },
              content: '<h1>Gavin de Becker & Associates</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.662362,
                lng: -122.392423
              },
              content: '<h1>GBT</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.794901,
                lng: -122.392874
              },
              content: '<h1>GCA Altium</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.677726,
                lng: -117.838777
              },
              content: '<h1>GDR Group</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.981162,
                lng: -118.414784
              },
              content: '<h1>Gehry Partners</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 34.157307,
                lng: -118.491924
              },
              content: '<h1>Gelsons</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.655897,
                lng: -122.377593
              },
              content: '<h1>Genentech</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 32.904458,
                lng: -117.233601
              },
              content: '<h1>General Atomics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 32.936679,
                lng: -117.022354
              },
              content: '<h1>General Atomics Aeronautical Systems</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.716649,
                lng: -117.807127
              },
              content: '<h1>General Procurement</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.703695,
                lng: -122.470937
              },
              content: '<h1>Genesys</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.132751,
                lng: -117.272229
              },
              content: '<h1>GenMark Diagnostics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 32.878107,
                lng: -117.2026
              },
              content: '<h1>Genomatica</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.498949,
                lng: -122.218121
              },
              content: '<h1>Genomic Health</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.791242,
                lng: -122.397133
              },
              content: '<h1>Gensler</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 38.258752,
                lng: -122.069424
              },
              content: '<h1>GeoVera</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 34.067519,
                lng: -118.400018
              },
              content: '<h1>Gersh Agency</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 34.052713,
                lng: -118.251789
              },
              content: '<h1>Gibson Dunn</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 33.991793,
                lng: -118.13616
              },
              content: '<h1>Gibson Overseas</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.382142,
                lng: -121.967609
              },
              content: '<h1>Gigamon</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.425036,
                lng: -122.146571
              },
              content: '<h1>Gigsky</h1>' + '<h2>Telecommunications</h2>'
            },
            {
              coords: {
                lat: 37.570085,
                lng: -122.282334
              },
              content: '<h1>Gilead Sciences</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.686473,
                lng: -121.811792
              },
              content: '<h1>Gillig</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.116845,
                lng: -117.575591
              },
              content: '<h1>GITI Tire</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.440883,
                lng: -117.582972
              },
              content: '<h1>Glaukos</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.535348,
                lng: -117.717946
              },
              content: '<h1>Global Beverage Group</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 35.360348,
                lng: -119.061335
              },
              content: '<h1>Global CTI</h1>' + '<h2>Telecommunications</h2>'
            },
            {
              coords: {
                lat: 33.975006,
                lng: -118.387209
              },
              content: '<h1>Global Eagle Entertainment</h1>' + '<h2>Telecommunications</h2>'
            },
            {
              coords: {
                lat: 37.38236,
                lng: -121.970789
              },
              content: '<h1>GlobalFoundries</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.367838,
                lng: -121.920216
              },
              content: '<h1>GlobalLogic</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 32.825247,
                lng: -117.120445
              },
              content: '<h1>Godrej Industries</h1>' + '<h2>Holding Companies & Conglomerates</h2>'
            },
            {
              coords: {
                lat: 34.062091,
                lng: -117.568768
              },
              content: '<h1>Gold Star Foods</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 38.57873,
                lng: -121.466786
              },
              content: '<h1>Golden 1 Credit Union</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.682516,
                lng: -117.84915
              },
              content: '<h1>Golden State Foods</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 38.235806,
                lng: -122.626034
              },
              content: '<h1>Golden State Lumber</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.750283,
                lng: -122.202944
              },
              content: '<h1>Golden State Warriors</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 34.005355,
                lng: -118.39396
              },
              content: '<h1>Goldrich & Kest Industries</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 33.133465,
                lng: -117.245252
              },
              content: '<h1>Good Source Solutions</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.422393,
                lng: -122.084198
              },
              content: '<h1>Google</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.534545,
                lng: -122.331297
              },
              content: '<h1>GoPro</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.802819,
                lng: -122.2728
              },
              content: '<h1>Gordon Rees Scully Mansukhani</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 32.72793,
                lng: -117.15529
              },
              content: '<h1>Gossamer Bio</h1>' + '<h2>Hospitals & Physicians Clinics</h2>'
            },
            {
              coords: {
                lat: 34.420596,
                lng: -118.579823
              },
              content: '<h1>Gothic Landscape</h1>' + '<h2>Consumer Services</h2>'
            },
            {
              coords: {
                lat: 33.133807,
                lng: -117.287448
              },
              content: '<h1>Grand Pacific Resorts</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 37.367989,
                lng: -121.88157
              },
              content: '<h1>Graniterock</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 34.141292,
                lng: -118.703976
              },
              content: '<h1>GRANT & WEBER</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.807775,
                lng: -122.265278
              },
              content: '<h1>Great Place To Work</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 32.897641,
                lng: -117.216597
              },
              content: '<h1>GreatCall</h1>' + '<h2>Telecommunications</h2>'
            },
            {
              coords: {
                lat: 34.151075,
                lng: -118.078547
              },
              content: '<h1>Green Dot</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 34.424713,
                lng: -119.708147
              },
              content: '<h1>Green Hills Software</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>Greenberg Glusker</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 34.061618,
                lng: -118.293371
              },
              content: '<h1>Greenbox Loans</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.6504,
                lng: -117.746171
              },
              content: '<h1>Greenwave Systems</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.769031,
                lng: -121.966771
              },
              content: '<h1>Grid Dynamics</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.919078,
                lng: -118.415309
              },
              content: '<h1>Griffin Capital</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.917797,
                lng: -117.856478
              },
              content: '<h1>Griffith</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.840095,
                lng: -122.290943
              },
              content: '<h1>Gritstone Oncology</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 38.599073,
                lng: -121.496038
              },
              content: '<h1>Grocery Outlet</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.815816,
                lng: -117.882846
              },
              content: '<h1>Group Delta Consultants</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.263184,
                lng: -121.959324
              },
              content: '<h1>Groupware Technology</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.445605,
                lng: -121.916955
              },
              content: '<h1>GSPANN</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 38.608476,
                lng: -121.445869
              },
              content: '<h1>GTs Living Foods</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.023823,
                lng: -118.239081
              },
              content: '<h1>Guess</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.975996,
                lng: -118.448356
              },
              content: '<h1>Guidance</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.514369,
                lng: -122.20056
              },
              content: '<h1>GuideSpark</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.558507,
                lng: -122.31064
              },
              content: '<h1>Guidewire Software</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 32.843449,
                lng: -117.17385
              },
              content: '<h1>Guild Mortgage Company</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 34.155951,
                lng: -118.796172
              },
              content: '<h1>Guitar Center</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.596622,
                lng: -122.381174
              },
              content: '<h1>Guittard Chocolate</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.917415,
                lng: -118.394899
              },
              content: '<h1>Guthy-Renker</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.669437,
                lng: -121.885889
              },
              content: '<h1>Gymboree</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 32.777927,
                lng: -117.154723
              },
              content: '<h1>H.G. Fenton</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 37.377013,
                lng: -122.0644
              },
              content: '<h1>HackerRank</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.14449,
                lng: -118.409977
              },
              content: '<h1>Hallmark Channel</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 32.908585,
                lng: -117.229439
              },
              content: '<h1>Halozyme Therapeutics</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>Hanmi Bank</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 34.17901,
                lng: -118.601073
              },
              content: '<h1>Hanna Brophy</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>Hannibal Industries</h1>' + '<h2>Minerals & Mining</h2>'
            },
            {
              coords: {
                lat: 34.10673,
                lng: -117.822858
              },
              content: '<h1>Harbor Freight Tools</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.391474,
                lng: -121.931977
              },
              content: '<h1>Harmonic</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 32.727739,
                lng: -117.17068
              },
              content: '<h1>Harper Construction</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 32.656815,
                lng: -117.111954
              },
              content: '<h1>Harvest Food Distributors</h1>' + '<h2>Transportation</h2>'
            },
            {
              coords: {
                lat: 37.793863,
                lng: -122.400374
              },
              content: '<h1>Hathaway Dinwiddie Construction</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 34.048421,
                lng: -118.25875
              },
              content: '<h1>HauteLook</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.413921,
                lng: -122.085078
              },
              content: '<h1>Hawk Ridge Systems</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.014405,
                lng: -117.126153
              },
              content: '<h1>Hawthorne Cat</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.033041,
                lng: -118.461777
              },
              content: '<h1>HBA</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.386366,
                lng: -122.037671
              },
              content: '<h1>HCL America, Inc.</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.026922,
                lng: -118.469383
              },
              content: '<h1>Headspace</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.4284,
                lng: -121.892259
              },
              content: '<h1>Headway Technologies</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.24246,
                lng: -118.599926
              },
              content: '<h1>Health Advocates</h1>' + '<h2>Consumer Services</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>Health Net</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 37.883014,
                lng: -121.281389
              },
              content: '<h1>Health Plan</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 36.75156,
                lng: -119.800612
              },
              content: '<h1>HealthComp</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.514369,
                lng: -122.20056
              },
              content: '<h1>HeartFlow</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.64445,
                lng: -122.138065
              },
              content: '<h1>Heat and Control</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.135028,
                lng: -118.041108
              },
              content: '<h1>Heateflex</h1>' + '<h2>Minerals & Mining</h2>'
            },
            {
              coords: {
                lat: 33.916723,
                lng: -118.402015
              },
              content: '<h1>Henry Company</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.044836,
                lng: -118.264528
              },
              content: '<h1>Herbalife Nutrition</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.331712,
                lng: -121.891787
              },
              content: '<h1>Heritage Bank of Commerce</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 37.79182,
                lng: -122.393591
              },
              content: '<h1>Hero Digital</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 32.888611,
                lng: -117.224519
              },
              content: '<h1>Heron Therapeutics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.418272,
                lng: -121.97863
              },
              content: '<h1>Hewlett Packard Enterprise</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.417977,
                lng: -119.683764
              },
              content: '<h1>HG Data</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.776417,
                lng: -117.871598
              },
              content: '<h1>Hickory Farms</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.670635,
                lng: -117.83459
              },
              content: '<h1>HireRight</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.65076,
                lng: -117.747612
              },
              content: '<h1>Hitachi Solutions</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.382387,
                lng: -121.977487
              },
              content: '<h1>Hitachi Vantara</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.073547,
                lng: -117.5722
              },
              content: '<h1>HMC Architects</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 33.129524,
                lng: -117.333005
              },
              content: '<h1>Hoehn Motors</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.354559,
                lng: -121.883844
              },
              content: '<h1>Hoge Fenton</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 34.216548,
                lng: -119.078565
              },
              content: '<h1>Holthouse Carlin & Van Trigt</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.838113,
                lng: -118.314955
              },
              content: '<h1>Honda Powersports</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.82415,
                lng: -117.897707
              },
              content: '<h1>HoneyBaked Ham</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.426235,
                lng: -122.139644
              },
              content: '<h1>Hopkins & Carley</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 34.000764,
                lng: -117.918169
              },
              content: '<h1>Hot Topic</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.057348,
                lng: -118.417459
              },
              content: '<h1>Houlihan Lokey</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.820418,
                lng: -117.507918
              },
              content: '<h1>HP Communications</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.412152,
                lng: -122.148505
              },
              content: '<h1>HP Inc</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.05075,
                lng: -118.459614
              },
              content: '<h1>Hudson Pacific Properties</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 34.022748,
                lng: -118.484133
              },
              content: '<h1>Hulu</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 33.825107,
                lng: -118.129769
              },
              content: '<h1>Human Touch</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.650602,
                lng: -117.716613
              },
              content: '<h1>Hunsaker & Associates Irvine</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 34.154227,
                lng: -118.25435
              },
              content: '<h1>Hutchinson & Bloodgood</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.175707,
                lng: -118.352638
              },
              content: '<h1>Hydra-Electric</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.226374,
                lng: -119.018327
              },
              content: '<h1>Hygiena</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>Hylands</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.031687,
                lng: -118.22793
              },
              content: '<h1>Hyperloop One</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.050759,
                lng: -118.25881
              },
              content: '<h1>Hypermedia Systems</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.393682,
                lng: -122.099388
              },
              content: '<h1>HyTrust</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.701748,
                lng: -117.954044
              },
              content: '<h1>HYUNDAI AUTOEVER</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.496357,
                lng: -121.979836
              },
              content: '<h1>Hyve Solutions</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.535348,
                lng: -117.717946
              },
              content: '<h1>iBASEt</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.048532,
                lng: -118.462273
              },
              content: '<h1>IBISWorld, Inc.</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.473244,
                lng: -121.93728
              },
              content: '<h1>Ichor Holdings</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.62899,
                lng: -122.421649
              },
              content: '<h1>ICIX</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.057348,
                lng: -118.417459
              },
              content: '<h1>ICM Partners</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 38.352043,
                lng: -121.964108
              },
              content: '<h1>ICON Aircraft</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.797829,
                lng: -122.401911
              },
              content: '<h1>ICONIQ Capital</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.451249,
                lng: -117.602467
              },
              content: '<h1>ICU Medical</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 32.989361,
                lng: -117.075771
              },
              content: '<h1>ICW Group</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 33.857295,
                lng: -117.230432
              },
              content: '<h1>iHerb</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 32.869726,
                lng: -117.197224
              },
              content: '<h1>Illumina</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.385791,
                lng: -122.005617
              },
              content: '<h1>Illumio</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.832402,
                lng: -118.341001
              },
              content: '<h1>Image Solutions</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.687498,
                lng: -117.833164
              },
              content: '<h1>Impac Mortgage Holdings</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.721096,
                lng: -117.912171
              },
              content: '<h1>IMPCO Technologies</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.537721,
                lng: -122.256237
              },
              content: '<h1>Imperva</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.238049,
                lng: -121.974603
              },
              content: '<h1>Impetus Technologies</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.873693,
                lng: -117.746478
              },
              content: '<h1>Implant Direct</h1>' + '<h2>Hospitals & Physicians Clinics</h2>'
            },
            {
              coords: {
                lat: 37.387076,
                lng: -121.966851
              },
              content: '<h1>Incedo</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.38392,
                lng: -122.01287
              },
              content: '<h1>IndiaNIC</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 38.676774,
                lng: -121.152638
              },
              content: '<h1>Inductive Automation</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.502406,
                lng: -121.936515
              },
              content: '<h1>Industrial Electric Mfg</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.221799,
                lng: -118.371481
              },
              content: '<h1>Industrial Metal Supply</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.413592,
                lng: -122.018762
              },
              content: '<h1>Infinera</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.69293,
                lng: -117.860648
              },
              content: '<h1>Infinite Electronics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.322975,
                lng: -121.993664
              },
              content: '<h1>Infinx</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.395874,
                lng: -121.92855
              },
              content: '<h1>Infoanalytica</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.229787,
                lng: -121.971922
              },
              content: '<h1>Infogain</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.510605,
                lng: -122.205753
              },
              content: '<h1>Informatica</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 32.841101,
                lng: -117.273042
              },
              content: '<h1>Information Systems Laboratories</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.337098,
                lng: -121.946711
              },
              content: '<h1>Informative Research</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 37.395969,
                lng: -121.978759
              },
              content: '<h1>InfoStretch</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.425492,
                lng: -122.145965
              },
              content: '<h1>Infoworks</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.069985,
                lng: -120.835536
              },
              content: '<h1>Ingomar Packing Company</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.670635,
                lng: -117.83459
              },
              content: '<h1>Ingram Micro</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.155842,
                lng: -118.478117
              },
              content: '<h1>INgrooves</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.253863,
                lng: -119.236892
              },
              content: '<h1>InkCycle</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.354559,
                lng: -121.883844
              },
              content: '<h1>Innominds</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.379611,
                lng: -121.967878
              },
              content: '<h1>Innova Solutions</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.794083,
                lng: -122.402591
              },
              content: '<h1>Innovaccer</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 32.783584,
                lng: -117.125615
              },
              content: '<h1>InnovaSystems</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.367231,
                lng: -121.91988
              },
              content: '<h1>Innovative Logic</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.436352,
                lng: -119.846478
              },
              content: '<h1>Innovative Micro Technology</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.427704,
                lng: -119.867423
              },
              content: '<h1>Inogen</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.406511,
                lng: -121.980307
              },
              content: '<h1>Inphi</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 32.897274,
                lng: -117.201077
              },
              content: '<h1>Inseego</h1>' + '<h2>Telecommunications</h2>'
            },
            {
              coords: {
                lat: 33.690206,
                lng: -117.877915
              },
              content: '<h1>Insight Investments</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.666542,
                lng: -117.659449
              },
              content: '<h1>Insulectro</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.424421,
                lng: -122.136454
              },
              content: '<h1>Intapp</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.640257,
                lng: -122.117951
              },
              content: '<h1>Intarcia Therapeutics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.705962,
                lng: -117.845702
              },
              content: '<h1>Integral Aerospace</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.810035,
                lng: -122.292615
              },
              content: '<h1>Integral Group</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.386805,
                lng: -121.963888
              },
              content: '<h1>Intel</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.238049,
                lng: -121.974603
              },
              content: '<h1>Intellicus Technologies</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.056372,
                lng: -117.75391
              },
              content: '<h1>Inter Valley Health Plan</h1>' + '<h2>Hospitals & Physicians Clinics</h2>'
            },
            {
              coords: {
                lat: 32.89426,
                lng: -117.203238
              },
              content: '<h1>Intercare Insurance Solutions</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 37.779833,
                lng: -122.389572
              },
              content: '<h1>Intercom</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.388765,
                lng: -122.04822
              },
              content: '<h1>Intermedia</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.780344,
                lng: -122.462101
              },
              content: '<h1>International Beverage Holdings</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.157106,
                lng: -118.487678
              },
              content: '<h1>International Parking Design</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 33.679735,
                lng: -117.839674
              },
              content: '<h1>International Vitamin Corporation</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.499468,
                lng: -122.143871
              },
              content: '<h1>Intersect ENT</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.38446,
                lng: -122.00231
              },
              content: '<h1>Intertrust</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.384127,
                lng: -121.954159
              },
              content: '<h1>Intevac</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.430613,
                lng: -119.887891
              },
              content: '<h1>InTouch Health</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.429802,
                lng: -122.096322
              },
              content: '<h1>Intuit</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.37294,
                lng: -122.003968
              },
              content: '<h1>Intuitive Surgical</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.381272,
                lng: -121.986161
              },
              content: '<h1>INVECAS Inc</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.367231,
                lng: -121.91988
              },
              content: '<h1>InvenSense</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 32.900543,
                lng: -117.194342
              },
              content: '<h1>Invivoscribe</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.142031,
                lng: -117.251401
              },
              content: '<h1>Ionis Pharmaceuticals</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.302852,
                lng: -121.950643
              },
              content: '<h1>iOPEX Technologies</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.866237,
                lng: -118.23024
              },
              content: '<h1>IPS Roofing Products</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.566991,
                lng: -122.326336
              },
              content: '<h1>Ipsy</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>Irell & Manella</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 37.489488,
                lng: -121.932117
              },
              content: '<h1>Iron Systems</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.607945,
                lng: -117.878704
              },
              content: '<h1>Irvine Company</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 33.667918,
                lng: -117.766296
              },
              content: '<h1>Irvine Ranch Water District</h1>' + '<h2>Energy, Utilities & Waste</h2>'
            },
            {
              coords: {
                lat: 37.444856,
                lng: -122.16507
              },
              content: '<h1>Issuu</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 37.789373,
                lng: -122.399666
              },
              content: '<h1>Iterable</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.710714,
                lng: -117.843692
              },
              content: '<h1>Iteris</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.520012,
                lng: -122.03178
              },
              content: '<h1>ITRenew</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 36.233437,
                lng: -119.332986
              },
              content: '<h1>J.D. Heiskell & Co</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.148666,
                lng: -118.799356
              },
              content: '<h1>J.D. Power and Associates</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.921308,
                lng: -122.014741
              },
              content: '<h1>J.F. Shea</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 33.123029,
                lng: -117.106179
              },
              content: '<h1>J.R. Filanc Construction Company, Inc</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>j2 Global</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 32.823226,
                lng: -117.128763
              },
              content: '<h1>Jack in the Box</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 38.463407,
                lng: -122.718931
              },
              content: '<h1>Jackson Family Wines</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.350018,
                lng: -121.894751
              },
              content: '<h1>Jackson Rancheria</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 37.797509,
                lng: -122.40407
              },
              content: '<h1>Jackson Square Aviation</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.999988,
                lng: -117.730217
              },
              content: '<h1>Jacuzzi</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.367231,
                lng: -121.91988
              },
              content: '<h1>Jade Global</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.136542,
                lng: -118.821533
              },
              content: '<h1>Jafra Cosmetics International</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.025141,
                lng: -118.377583
              },
              content: '<h1>Jam City</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.789607,
                lng: -122.403496
              },
              content: '<h1>Jamba Juice</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 37.406305,
                lng: -121.976549
              },
              content: '<h1>Jamcracker</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.520308,
                lng: -122.262926
              },
              content: '<h1>Jameco Electronics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.924967,
                lng: -118.163097
              },
              content: '<h1>James Perse Enterprises</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.671264,
                lng: -117.85825
              },
              content: '<h1>Jams</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 33.140195,
                lng: -117.269538
              },
              content: '<h1>Jazzercise</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 32.843559,
                lng: -117.27921
              },
              content: '<h1>JC Resorts</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 38.252043,
                lng: -122.046043
              },
              content: '<h1>Jelly Belly Candy</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.930377,
                lng: -117.303159
              },
              content: '<h1>Jenson USA</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 32.72793,
                lng: -117.15529
              },
              content: '<h1>Jeromes Furniture</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.186307,
                lng: -118.459015
              },
              content: '<h1>Jerry Leigh</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.695835,
                lng: -117.857311
              },
              content: '<h1>JetSuite</h1>' + '<h2>Transportation</h2>'
            },
            {
              coords: {
                lat: 32.950837,
                lng: -117.232879
              },
              content: '<h1>Jimbos</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.537249,
                lng: -122.297623
              },
              content: '<h1>Jobvite</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.306416,
                lng: -118.464579
              },
              content: '<h1>Johanson Dielectrics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.090932,
                lng: -118.305218
              },
              content: '<h1>Jons International Marketplace</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.97112,
                lng: -122.043554
              },
              content: '<h1>Jopari Solutions</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.048026,
                lng: -118.462318
              },
              content: '<h1>JRK Property Holdings</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 37.592905,
                lng: -122.372195
              },
              content: '<h1>JSI Logistics</h1>' + '<h2>Transportation</h2>'
            },
            {
              coords: {
                lat: 37.40766,
                lng: -122.029301
              },
              content: '<h1>Juniper Networks</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.00975,
                lng: -117.343126
              },
              content: '<h1>K&N Engineering</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.048277,
                lng: -118.261164
              },
              content: '<h1>K2 Intelligence</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.535348,
                lng: -117.717946
              },
              content: '<h1>Kaiser Aluminum</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.387219,
                lng: -122.049651
              },
              content: '<h1>Kaleidescape</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.262934,
                lng: -121.958044
              },
              content: '<h1>Kalkitech</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.670635,
                lng: -117.83459
              },
              content: '<h1>Kareo</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.916723,
                lng: -118.402015
              },
              content: '<h1>KARL STORZ Endoscopy</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 32.832579,
                lng: -117.231429
              },
              content: '<h1>Karl Strauss Brewing</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.645259,
                lng: -117.713878
              },
              content: '<h1>Karma Automotive</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.420379,
                lng: -122.213742
              },
              content: '<h1>Katerra</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 34.060955,
                lng: -118.417855
              },
              content: '<h1>Kayne Anderson Fund Advisors</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 37.816522,
                lng: -122.258351
              },
              content: '<h1>Kazan , McClain , Satterley & Greenwood</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 34.057696,
                lng: -118.447105
              },
              content: '<h1>KB Home</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 33.996292,
                lng: -117.967802
              },
              content: '<h1>KCAL Insurance Agency</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 33.82397,
                lng: -118.329545
              },
              content: '<h1>Keenan & Associates</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 37.776049,
                lng: -122.396788
              },
              content: '<h1>KeepTruckin</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.797147,
                lng: -122.401161
              },
              content: '<h1>Keker, Van Nest & Peters</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 37.963147,
                lng: -122.488299
              },
              content: '<h1>Kelleher</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.945271,
                lng: -118.06779
              },
              content: '<h1>Kelly Pipe</h1>' + '<h2>Minerals & Mining</h2>'
            },
            {
              coords: {
                lat: 39.352512,
                lng: -120.136076
              },
              content: '<h1>Kelly-Moore Paints</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.065258,
                lng: -118.400499
              },
              content: '<h1>Kennedy Wilson</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 33.718431,
                lng: -117.786657
              },
              content: '<h1>Kennedy/Jenks</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 35.355216,
                lng: -119.110462
              },
              content: '<h1>Kern Family Health Care</h1>' + '<h2>Hospitals & Physicians Clinics</h2>'
            },
            {
              coords: {
                lat: 37.372372,
                lng: -121.976505
              },
              content: '<h1>KeyPoint Credit Union</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 38.487507,
                lng: -122.69334
              },
              content: '<h1>Keysight Technologies</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.031948,
                lng: -118.455056
              },
              content: '<h1>Kilroy Realty</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 32.771394,
                lng: -117.156958
              },
              content: '<h1>Kimball Tirey & St. John</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 34.441815,
                lng: -119.821008
              },
              content: '<h1>Kimpton Hotel & Restaurant Group</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 37.706791,
                lng: -121.813064
              },
              content: '<h1>Kinetics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.709629,
                lng: -117.951352
              },
              content: '<h1>Kingston Technology</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.430674,
                lng: -121.899508
              },
              content: '<h1>KLA Corporation</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 38.476065,
                lng: -122.7238
              },
              content: '<h1>Klarquist</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>Klinedinst</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 37.51377,
                lng: -121.944821
              },
              content: '<h1>KloudData</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.682715,
                lng: -117.852474
              },
              content: '<h1>Knobbe, Martens, Olson & Bear</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 33.842917,
                lng: -117.998254
              },
              content: '<h1>Knotts Berry Farm</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 33.677726,
                lng: -117.838777
              },
              content: '<h1>Koeller Nebeker Carlson & Haluck</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 33.670375,
                lng: -117.761793
              },
              content: '<h1>Kofax</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.783918,
                lng: -117.881172
              },
              content: '<h1>Kondaur Capital</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>Korn Ferry</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 32.911949,
                lng: -117.115042
              },
              content: '<h1>Kratos Defense & Security Solutions</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.282978,
                lng: -118.894954
              },
              content: '<h1>Kretek</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 36.765394,
                lng: -119.725976
              },
              content: '<h1>KSEE</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 33.682516,
                lng: -117.84915
              },
              content: '<h1>KTGY Group</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.687418,
                lng: -122.401593
              },
              content: '<h1>KTSF</h1>' + '<h2>Telecommunications</h2>'
            },
            {
              coords: {
                lat: 32.881842,
                lng: -117.210022
              },
              content: '<h1>Kyriba</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.136542,
                lng: -118.821533
              },
              content: '<h1>L-Acoustics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.814231,
                lng: -122.291143
              },
              content: '<h1>L.N. Curtis & Sons</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.04661,
                lng: -118.26273
              },
              content: '<h1>La Follette Johnson</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 33.717534,
                lng: -117.800872
              },
              content: '<h1>La Jolla Group</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 32.837011,
                lng: -117.158619
              },
              content: '<h1>La Mesa RV</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.742981,
                lng: -118.290249
              },
              content: '<h1>LA Phil</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 34.150894,
                lng: -118.131579
              },
              content: '<h1>LACERA</h1>' + '<h2>Government</h2>'
            },
            {
              coords: {
                lat: 37.510192,
                lng: -122.255296
              },
              content: '<h1>LakePharma</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.839866,
                lng: -118.218901
              },
              content: '<h1>Lakeshore Learning Materials</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.51377,
                lng: -121.944821
              },
              content: '<h1>Lam Research</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.242596,
                lng: -118.574234
              },
              content: '<h1>Lamps Plus</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.970839,
                lng: -122.057001
              },
              content: '<h1>Land Home Financial Services</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 34.033807,
                lng: -118.447259
              },
              content: '<h1>Landmark Theatres</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 33.621122,
                lng: -117.874381
              },
              content: '<h1>Landsea Holdings</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 34.048171,
                lng: -118.132541
              },
              content: '<h1>LanguageLine Solutions</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.715146,
                lng: -117.805863
              },
              content: '<h1>Largo Concrete Inc</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.059073,
                lng: -118.391364
              },
              content: '<h1>Laser Away</h1>' + '<h2>Consumer Services</h2>'
            },
            {
              coords: {
                lat: 33.821109,
                lng: -118.189749
              },
              content: '<h1>Laserfiche</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.051905,
                lng: -118.252498
              },
              content: '<h1>Latham & Watkins</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 37.562052,
                lng: -122.308504
              },
              content: '<h1>Lattice Engines</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.808898,
                lng: -117.86706
              },
              content: '<h1>Lazy Dog Restaurant & Bar</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 33.670635,
                lng: -117.83459
              },
              content: '<h1>LBA Realty</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 34.194976,
                lng: -118.362559
              },
              content: '<h1>LBI Media</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 33.82707,
                lng: -118.149131
              },
              content: '<h1>LD Products</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.005639,
                lng: -118.151262
              },
              content: '<h1>Lee & Associates</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 34.163829,
                lng: -118.254643
              },
              content: '<h1>LegalZoom.com</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 32.833924,
                lng: -117.144888
              },
              content: '<h1>Legend</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 34.156036,
                lng: -118.334687
              },
              content: '<h1>Legendary Entertainment</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 37.789318,
                lng: -122.400655
              },
              content: '<h1>LendingClub</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 37.40452,
                lng: -122.03597
              },
              content: '<h1>Level 10 Construction</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.801792,
                lng: -122.402309
              },
              content: '<h1>Levi Strauss</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>Lieberman Research Worldwide</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.945718,
                lng: -118.389537
              },
              content: '<h1>Liebert Cassidy Whitmore</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 34.179003,
                lng: -118.600195
              },
              content: '<h1>LifeCare Assurance</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 37.48004,
                lng: -121.932968
              },
              content: '<h1>Lighthouse Worldwide Solutions</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.420379,
                lng: -122.213742
              },
              content: '<h1>Lightspeed Venture Partners</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 35.266778,
                lng: -120.659441
              },
              content: '<h1>Lindamood-Bell Learning Processes</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.393557,
                lng: -122.042501
              },
              content: '<h1>LinkedIn</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>LinQuest</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.031369,
                lng: -118.469716
              },
              content: '<h1>LionsGate Entertainment</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 37.41092,
                lng: -122.00449
              },
              content: '<h1>Liquid Robotics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.790592,
                lng: -122.403057
              },
              content: '<h1>Littler</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 34.074233,
                lng: -118.398462
              },
              content: '<h1>Live Nation Entertainment</h1>' + '<h2>Holding Companies & Conglomerates</h2>'
            },
            {
              coords: {
                lat: 37.323382,
                lng: -122.021584
              },
              content: '<h1>Liveclicker</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.518693,
                lng: -122.254036
              },
              content: '<h1>LiveOps</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.778008,
                lng: -122.431272
              },
              content: '<h1>LiveRamp</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.795268,
                lng: -122.403541
              },
              content: '<h1>LiveVox</h1>' + '<h2>Telecommunications</h2>'
            },
            {
              coords: {
                lat: 33.874734,
                lng: -118.021918
              },
              content: '<h1>Living Spaces</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.392457,
                lng: -122.071744
              },
              content: '<h1>Livongo</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.535348,
                lng: -117.717946
              },
              content: '<h1>loanDepot</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 34.06191,
                lng: -118.416909
              },
              content: '<h1>Loeb & Loeb, LLP</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 34.420418,
                lng: -119.699793
              },
              content: '<h1>LogicMonitor</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.520012,
                lng: -122.03178
              },
              content: '<h1>Logitech</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.193167,
                lng: -118.348893
              },
              content: '<h1>Logix Federal Credit Union</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.783517,
                lng: -118.168232
              },
              content: '<h1>Long Beach Transit</h1>' + '<h2>Transportation</h2>'
            },
            {
              coords: {
                lat: 36.97432,
                lng: -122.026612
              },
              content: '<h1>Looker</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.798821,
                lng: -122.399915
              },
              content: '<h1>Lookout</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.637592,
                lng: -117.605356
              },
              content: '<h1>Lorber Law</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 33.923614,
                lng: -118.40614
              },
              content: '<h1>Los Angeles Lakers</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 33.930192,
                lng: -118.382113
              },
              content: '<h1>Los Angeles Times</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 34.131115,
                lng: -118.345232
              },
              content: '<h1>Lotus Corporation</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 33.7755,
                lng: -117.889755
              },
              content: '<h1>LRES</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 34.040525,
                lng: -118.230659
              },
              content: '<h1>Lucky Brand</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.153556,
                lng: -118.4658
              },
              content: '<h1>Lucky Strike</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 33.7755,
                lng: -117.889755
              },
              content: '<h1>Lumen21</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.435225,
                lng: -121.921281
              },
              content: '<h1>Lumentum</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 38.463407,
                lng: -122.718931
              },
              content: '<h1>Luther Burbank</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.120169,
                lng: -117.281796
              },
              content: '<h1>Luxtera</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.776122,
                lng: -122.391522
              },
              content: '<h1>Lyft</h1>' + '<h2>Transportation</h2>'
            },
            {
              coords: {
                lat: 37.267582,
                lng: -121.793658
              },
              content: '<h1>Lynx Software Technologies</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 38.57873,
                lng: -121.466786
              },
              content: '<h1>Lyon Real Estate</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 36.72424,
                lng: -119.770449
              },
              content: '<h1>Lyons Magnus</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 32.887598,
                lng: -117.211597
              },
              content: '<h1>Lytx</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.405446,
                lng: -121.887136
              },
              content: '<h1>Ma Labs</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.019875,
                lng: -118.498666
              },
              content: '<h1>Macerich</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 37.761415,
                lng: -122.416352
              },
              content: '<h1>Madison Reed</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.224992,
                lng: -117.308423
              },
              content: '<h1>Magnaflow</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.978562,
                lng: -118.273754
              },
              content: '<h1>Main Electric Supply</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.000764,
                lng: -117.918169
              },
              content: '<h1>Majestic Realty</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 37.787508,
                lng: -122.398559
              },
              content: '<h1>Malcolm Drilling</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 34.037656,
                lng: -118.442645
              },
              content: '<h1>Manatt , Phelps & Phillips</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 33.797395,
                lng: -118.121307
              },
              content: '<h1>Mangan</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.825016,
                lng: -118.028389
              },
              content: '<h1>Manhattan Beachwear</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.060041,
                lng: -117.287711
              },
              content: '<h1>Mann Packing</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.149057,
                lng: -118.8004
              },
              content: '<h1>MannKind</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.431169,
                lng: -122.127302
              },
              content: '<h1>MAP Royalty</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.397144,
                lng: -121.976833
              },
              content: '<h1>MapR</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.152983,
                lng: -118.648438
              },
              content: '<h1>Marcus & Millichap</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 37.512729,
                lng: -122.25404
              },
              content: '<h1>MarkLogic</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.864773,
                lng: -118.39306
              },
              content: '<h1>Marlin Equity Partners</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 32.872082,
                lng: -117.206292
              },
              content: '<h1>Marsh & McLennan Agency</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 37.410957,
                lng: -121.982052
              },
              content: '<h1>Marvell Technology</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 38.29396,
                lng: -122.475842
              },
              content: '<h1>Marys Pizza Shack</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 33.662722,
                lng: -117.756849
              },
              content: '<h1>Masimo</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.771722,
                lng: -121.964668
              },
              content: '<h1>Mason-McDuffie Mortgage</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 38.57873,
                lng: -121.466786
              },
              content: '<h1>Master Halco</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.147345,
                lng: -118.094264
              },
              content: '<h1>Materia</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.920393,
                lng: -118.391868
              },
              content: '<h1>Mattel</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.41013,
                lng: -122.01354
              },
              content: '<h1>Matterport</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.475105,
                lng: -121.937594
              },
              content: '<h1>Mattson Technology</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.404251,
                lng: -121.948564
              },
              content: '<h1>Maxim Integrated Products</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.964587,
                lng: -118.060916
              },
              content: '<h1>Maxon Lift</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.872838,
                lng: -117.742826
              },
              content: '<h1>Maxxess Systems</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.040714,
                lng: -118.249984
              },
              content: '<h1>Mayesh Wholesale Florist</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.6504,
                lng: -117.746171
              },
              content: '<h1>Mazda</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.678865,
                lng: -117.83794
              },
              content: '<h1>MBK Real Estate</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 37.389934,
                lng: -121.979393
              },
              content: '<h1>McAfee</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.778008,
                lng: -122.431272
              },
              content: '<h1>MCG Architecture</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.696458,
                lng: -121.741823
              },
              content: '<h1>McGrath RentCorp</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 32.910699,
                lng: -117.22369
              },
              content: '<h1>Md7</h1>' + '<h2>Telecommunications</h2>'
            },
            {
              coords: {
                lat: 37.613527,
                lng: -122.056654
              },
              content: '<h1>MDC Vacuum Products</h1>' + '<h2>Minerals & Mining</h2>'
            },
            {
              coords: {
                lat: 37.901876,
                lng: -122.061995
              },
              content: '<h1>Mechanics Bank</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 37.788914,
                lng: -122.40128
              },
              content: '<h1>Medallia</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.713308,
                lng: -117.797557
              },
              content: '<h1>Medata Resources</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 32.933869,
                lng: -117.108159
              },
              content: '<h1>MedImpact Healthcare</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 38.597567,
                lng: -121.439287
              },
              content: '<h1>Meditab Software</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.012046,
                lng: -118.390917
              },
              content: '<h1>MedMen</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.792553,
                lng: -122.40002
              },
              content: '<h1>Medrio</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.708514,
                lng: -117.847951
              },
              content: '<h1>MedXM</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 34.271071,
                lng: -118.721442
              },
              content: '<h1>Meggitt Safety Systems</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.228245,
                lng: -119.020048
              },
              content: '<h1>Meissner Filtration Products</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.63005,
                lng: -117.605369
              },
              content: '<h1>Melissa DATA</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.378851,
                lng: -121.987328
              },
              content: '<h1>Mellanox Technologies</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.790937,
                lng: -122.401337
              },
              content: '<h1>Meltwater Group</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.010562,
                lng: -117.094609
              },
              content: '<h1>Memjet</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.062391,
                lng: -118.349469
              },
              content: '<h1>Mercury Insurance Services, LLC</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 33.917415,
                lng: -118.394899
              },
              content: '<h1>Merex Group</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.826822,
                lng: -117.850619
              },
              content: '<h1>MeriCal</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.69436,
                lng: -117.893037
              },
              content: '<h1>MeridianLink</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.951474,
                lng: -118.379853
              },
              content: '<h1>Merle Norman Cosmetics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.585616,
                lng: -117.730383
              },
              content: '<h1>Metagenics United States</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.431169,
                lng: -122.127302
              },
              content: '<h1>MetricStream</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.828038,
                lng: -118.145882
              },
              content: '<h1>Metro Ports</h1>' + '<h2>Transportation</h2>'
            },
            {
              coords: {
                lat: 34.055053,
                lng: -118.232674
              },
              content: '<h1>Metrolink Trains</h1>' + '<h2>Transportation</h2>'
            },
            {
              coords: {
                lat: 34.054875,
                lng: -118.237482
              },
              content: '<h1>Metropolitan Water District of Southern California</h1>' + '<h2>Energy, Utilities & Waste</h2>'
            },
            {
              coords: {
                lat: 37.854727,
                lng: -122.288164
              },
              content: '<h1>Meyer Sound Laboratories</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.803765,
                lng: -122.275344
              },
              content: '<h1>Meyers Nave</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 34.263979,
                lng: -118.570937
              },
              content: '<h1>MGA Entertainment</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.06804,
                lng: -118.400556
              },
              content: '<h1>MGM Studios</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 33.916723,
                lng: -118.402015
              },
              content: '<h1>Michael Sullivan & Associates</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 33.584522,
                lng: -117.731745
              },
              content: '<h1>MicroVention</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.509957,
                lng: -121.942892
              },
              content: '<h1>Milestone Technologies</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.023334,
                lng: -117.084574
              },
              content: '<h1>Millennium Health</h1>' + '<h2>Healthcare Services</h2>'
            },
            {
              coords: {
                lat: 38.9519,
                lng: -121.082734
              },
              content: '<h1>Miltenyi Biotec</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 35.247095,
                lng: -120.645267
              },
              content: '<h1>Mindbody</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.293117,
                lng: -121.934388
              },
              content: '<h1>Mirantis</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.313867,
                lng: -122.049804
              },
              content: '<h1>Mirapath</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 32.878395,
                lng: -117.206866
              },
              content: '<h1>Mirati Therapeutics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.696781,
                lng: -117.8508
              },
              content: '<h1>Mirion Technologies</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.123993,
                lng: -121.640445
              },
              content: '<h1>Mission Bell</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.133625,
                lng: -117.061888
              },
              content: '<h1>Mission Federal Credit Union</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 34.389656,
                lng: -119.702652
              },
              content: '<h1>Mission Linen Supply</h1>' + '<h2>Consumer Services</h2>'
            },
            {
              coords: {
                lat: 34.228939,
                lng: -119.175349
              },
              content: '<h1>Mission Produce</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.29539,
                lng: -122.032955
              },
              content: '<h1>Mist Systems</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 32.851523,
                lng: -117.183269
              },
              content: '<h1>Mitchell International</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 32.718219,
                lng: -117.158821
              },
              content: '<h1>Mitek</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.809456,
                lng: -118.02889
              },
              content: '<h1>Mitsubishi Motors North America</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.607825,
                lng: -122.076542
              },
              content: '<h1>Mizuho OSI</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.389656,
                lng: -119.702652
              },
              content: '<h1>MNS Engineers</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 33.808595,
                lng: -118.134358
              },
              content: '<h1>MNX Global Logistics</h1>' + '<h2>Transportation</h2>'
            },
            {
              coords: {
                lat: 34.062268,
                lng: -118.354196
              },
              content: '<h1>Mob Scene</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.323816,
                lng: -122.038051
              },
              content: '<h1>Mobileum</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.621122,
                lng: -117.874381
              },
              content: '<h1>Mobilitie</h1>' + '<h2>Telecommunications</h2>'
            },
            {
              coords: {
                lat: 37.436869,
                lng: -121.891313
              },
              content: '<h1>Mobiveil</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.254919,
                lng: -118.401002
              },
              content: '<h1>MOC Products Company</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.561673,
                lng: -122.28596
              },
              content: '<h1>Model N</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.807339,
                lng: -118.146181
              },
              content: '<h1>Moffatt & Nichol</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 34.047989,
                lng: -118.443973
              },
              content: '<h1>Mojix</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.766572,
                lng: -118.200335
              },
              content: '<h1>Molina Healthcare</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 37.910791,
                lng: -122.544205
              },
              content: '<h1>Mollie Stone</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.179108,
                lng: -118.46588
              },
              content: '<h1>Momentous Insurance Brokerage</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 33.926603,
                lng: -117.878144
              },
              content: '<h1>Monoprice</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.861947,
                lng: -117.572106
              },
              content: '<h1>Monster Beverage</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.544192,
                lng: -117.765976
              },
              content: '<h1>Montage Hotels & Resorts</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 33.672421,
                lng: -117.764394
              },
              content: '<h1>Montage Reorganizes Under New Parent</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 34.421809,
                lng: -119.647323
              },
              content: '<h1>Montecito Bank & Trust</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.679735,
                lng: -117.839674
              },
              content: '<h1>Montrose Environmental Group</h1>' + '<h2>Energy, Utilities & Waste</h2>'
            },
            {
              coords: {
                lat: 34.222448,
                lng: -118.495445
              },
              content: '<h1>Moore Industries-International</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 32.877016,
                lng: -117.165721
              },
              content: '<h1>Mor Furniture for Less</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.020163,
                lng: -118.450131
              },
              content: '<h1>Morley Builders, Inc.</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 33.922648,
                lng: -116.807634
              },
              content: '<h1>Morongo Casino Resort & Spa</h1>' + '<h2>Hospitality</h2>'
            },
            {
              coords: {
                lat: 34.025361,
                lng: -117.830699
              },
              content: '<h1>Morrow-Meadows</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.808936,
                lng: -122.264692
              },
              content: '<h1>Mosaic</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 34.153509,
                lng: -118.466442
              },
              content: '<h1>Moss</h1>' + '<h2>Real Estate</h2>'
            },
            {
              coords: {
                lat: 33.853385,
                lng: -117.917969
              },
              content: '<h1>Motive Energy</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.945186,
                lng: -121.284615
              },
              content: '<h1>Mountain Valley Express</h1>' + '<h2>Transportation</h2>'
            },
            {
              coords: {
                lat: 37.381159,
                lng: -121.981694
              },
              content: '<h1>Move</h1>' + '<h2>Media & Internet</h2>'
            },
            {
              coords: {
                lat: 37.628618,
                lng: -122.424074
              },
              content: '<h1>Moxie</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.633512,
                lng: -117.743693
              },
              content: '<h1>MP Biomedicals, LLC.</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.235419,
                lng: -121.779082
              },
              content: '<h1>MPS</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.670691,
                lng: -117.863244
              },
              content: '<h1>MSC Software</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.66341,
                lng: -120.990112
              },
              content: '<h1>MTC Distributing</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.006113,
                lng: -118.143063
              },
              content: '<h1>MTE</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.787511,
                lng: -122.404703
              },
              content: '<h1>MuleSoft</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.672421,
                lng: -117.764394
              },
              content: '<h1>Multi-Fineline Electronix</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.821569,
                lng: -118.244483
              },
              content: '<h1>Multiquip Inc.</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.05513,
                lng: -118.25703
              },
              content: '<h1>Munger, Tolles & Olson</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 33.916723,
                lng: -118.402015
              },
              content: '<h1>Murad</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.916723,
                lng: -118.402015
              },
              content: '<h1>Murad</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.788686,
                lng: -122.403394
              },
              content: '<h1>Murphy Pearson Bradley & Feeney</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 33.870777,
                lng: -118.217446
              },
              content: '<h1>Murray Company Mechanical Contractors</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.654395,
                lng: -122.39026
              },
              content: '<h1>MyoKardia</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.916821,
                lng: -122.508718
              },
              content: '<h1>Nana Wall Systems</h1>' + '<h2>Minerals & Mining</h2>'
            },
            {
              coords: {
                lat: 37.430674,
                lng: -121.899508
              },
              content: '<h1>Nanometrics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.429096,
                lng: -121.892945
              },
              content: '<h1>Nanosys</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.013672,
                lng: -118.386741
              },
              content: '<h1>NantHealth</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 38.076077,
                lng: -122.131492
              },
              content: '<h1>NapaStyle</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 37.510192,
                lng: -122.255296
              },
              content: '<h1>Natera</h1>' + '<h2>Healthcare Services</h2>'
            },
            {
              coords: {
                lat: 34.155842,
                lng: -118.478117
              },
              content: '<h1>National Cement Company</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.264706,
                lng: -118.465992
              },
              content: '<h1>National Construction Rentals</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 32.940146,
                lng: -117.101358
              },
              content: '<h1>National Pen Company</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.14314,
                lng: -118.801376
              },
              content: '<h1>National Positions</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.065824,
                lng: -118.249462
              },
              content: '<h1>National Research Group</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 32.706454,
                lng: -117.159652
              },
              content: '<h1>National Steel and Shipbuilding</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.82415,
                lng: -117.897707
              },
              content: '<h1>National Technical Systems</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.147332,
                lng: -118.762607
              },
              content: '<h1>National Veterinary Associates</h1>' + '<h2>Healthcare Services</h2>'
            },
            {
              coords: {
                lat: 37.659677,
                lng: -121.89954
              },
              content: '<h1>Natus</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.028297,
                lng: -118.47112
              },
              content: '<h1>Naughty Dog</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.884009,
                lng: -117.935077
              },
              content: '<h1>NAVCO</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.880617,
                lng: -118.152631
              },
              content: '<h1>NC Dynamics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.254903,
                lng: -121.777043
              },
              content: '<h1>NDS Surgical Imaging</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 32.695746,
                lng: -117.118276
              },
              content: '<h1>Neighborhood National Bank</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 37.653515,
                lng: -122.344612
              },
              content: '<h1>Nektar Therapeutics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.861156,
                lng: -117.803448
              },
              content: '<h1>Nellson</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.240667,
                lng: -118.601694
              },
              content: '<h1>Neo Tech</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.404164,
                lng: -121.934007
              },
              content: '<h1>NeoPhotonics</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 36.761656,
                lng: -119.705464
              },
              content: '<h1>NETAFIM</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.412414,
                lng: -122.009731
              },
              content: '<h1>NetApp</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.38236,
                lng: -121.970789
              },
              content: '<h1>Netcordia</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.394523,
                lng: -121.925588
              },
              content: '<h1>NETGEAR</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.394523,
                lng: -121.925588
              },
              content: '<h1>NETGEAR</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.406785,
                lng: -121.978976
              },
              content: '<h1>Netronome</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.152983,
                lng: -118.648438
              },
              content: '<h1>Netsol Technologies</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.530666,
                lng: -122.262434
              },
              content: '<h1>NetSuite</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.658112,
                lng: -117.751166
              },
              content: '<h1>Network Capital Funding Corporation</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 33.653869,
                lng: -117.747306
              },
              content: '<h1>Netwrix</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 33.672421,
                lng: -117.764394
              },
              content: '<h1>Neudesic</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 32.949847,
                lng: -117.237483
              },
              content: '<h1>Neurocrine Biosciences</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.38874,
                lng: -122.048884
              },
              content: '<h1>NEUROPACE</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.714376,
                lng: -117.804345
              },
              content: '<h1>New American Funding</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 37.420379,
                lng: -122.213742
              },
              content: '<h1>New Enterprise Associates</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 32.88163,
                lng: -117.203649
              },
              content: '<h1>Newland Communities</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.898245,
                lng: -122.063719
              },
              content: '<h1>Newmeyer & Dillion</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 37.921308,
                lng: -122.014741
              },
              content: '<h1>Newport Group</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 37.395969,
                lng: -121.978759
              },
              content: '<h1>Nexenta Systems</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.545885,
                lng: -122.05318
              },
              content: '<h1>Nexient</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 33.682516,
                lng: -117.84915
              },
              content: '<h1>NextGen Healthcare</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.553263,
                lng: -121.980299
              },
              content: '<h1>NEXTracker</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.766115,
                lng: -121.95366
              },
              content: '<h1>NGS Global</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 34.032297,
                lng: -117.596947
              },
              content: '<h1>Niagara Bottling, LLC.</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.399306,
                lng: -121.936531
              },
              content: '<h1>NIO</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 33.858335,
                lng: -118.322086
              },
              content: '<h1>Nissin International Transport</h1>' + '<h2>Transportation</h2>'
            },
            {
              coords: {
                lat: 33.909775,
                lng: -117.863794
              },
              content: '<h1>Nisum Technologies</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.477995,
                lng: -121.925149
              },
              content: '<h1>Nitinol Devices & Components</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.79182,
                lng: -122.393591
              },
              content: '<h1>Nitro</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 37.837112,
                lng: -122.308601
              },
              content: '<h1>NMI Holdings</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 37.788914,
                lng: -122.40128
              },
              content: '<h1>NORCAL Mutual</h1>' + '<h2>Insurance</h2>'
            },
            {
              coords: {
                lat: 33.19775,
                lng: -117.377126
              },
              content: '<h1>North County Transit District</h1>' + '<h2>Government</h2>'
            },
            {
              coords: {
                lat: 40.388032,
                lng: -122.288204
              },
              content: '<h1>North State Grocery</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 33.870777,
                lng: -118.217446
              },
              content: '<h1>Northgate</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 40.578181,
                lng: -122.371731
              },
              content: '<h1>Northstar Senior Living</h1>' + '<h2>Healthcare Services</h2>'
            },
            {
              coords: {
                lat: 37.449014,
                lng: -122.159594
              },
              content: '<h1>Norwest Venture Partners</h1>' + '<h2>Finance</h2>'
            },
            {
              coords: {
                lat: 34.048277,
                lng: -118.261164
              },
              content: '<h1>Nossaman</h1>' + '<h2>Law Firms & Legal Services</h2>'
            },
            {
              coords: {
                lat: 34.425135,
                lng: -119.710093
              },
              content: '<h1>Novacoast</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.499468,
                lng: -122.143871
              },
              content: '<h1>NOVO Construction</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 38.542192,
                lng: -121.72732
              },
              content: '<h1>Novozymes Biotech</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 37.582991,
                lng: -122.007988
              },
              content: '<h1>Novum Structures</h1>' + '<h2>Construction</h2>'
            },
            {
              coords: {
                lat: 37.44222,
                lng: -122.165055
              },
              content: '<h1>NTT Innovation Institute</h1>' + '<h2>Software</h2>'
            },
            {
              coords: {
                lat: 38.681446,
                lng: -121.752768
              },
              content: '<h1>Nugget Markets</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34.389556,
                lng: -119.482395
              },
              content: '<h1>NuSil Technology</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.36766,
                lng: -121.918047
              },
              content: '<h1>Nutanix</h1>' + '<h2>Business Services</h2>'
            },
            {
              coords: {
                lat: 32.900504,
                lng: -117.209635
              },
              content: '<h1>NuVasive</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 34.037137,
                lng: -117.603968
              },
              content: '<h1>NuVision</h1>' + '<h2>Manufacturing</h2>'
            },
            {
              coords: {
                lat: 37.370642,
                lng: -121.967029
              },
              content: '<h1>NVIDIA</h1>' + '<h2>Retail</h2>'
            },
            {
              coords: {
                lat: 34051541,
                lng: -118253533
              },
              content: '<h1>O Melveny & Myers < /h1>' + '<h2>Law Firms & Legal Services</h2 > ' }, {
                coords: {
                  lat: 33.535348,
                  lng: -117.717946
                },
                content: '<h1>Oakley, Inc.</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 34.060395,
                  lng: -118.451606
                },
                content: '<h1>Oaktree Capital Management</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 33.807339,
                  lng: -118.146181
                },
                content: '<h1>Obagi Medical Products</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 33.65076,
                  lng: -117.747612
                },
                content: '<h1>Obsidian</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 33.916723,
                  lng: -118.402015
                },
                content: '<h1>OceanX</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.380809,
                  lng: -121.91893
                },
                content: '<h1>Oclaro</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.219567,
                  lng: -119.019627
                },
                content: '<h1>ODU-USA</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.395233,
                  lng: -122.051476
                },
                content: '<h1>Omnicell</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.39072,
                  lng: -121.964292
                },
                content: '<h1>OmniVision Technologies</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.791239,
                  lng: -122.396457
                },
                content: '<h1>ON24</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 34.146277,
                  lng: -118.131887
                },
                content: '<h1>One & All</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.368484,
                  lng: -121.94388
                },
                content: '<h1>One Workplace</h1>' + '<h2>Construction</h2>'
              },
              {
                coords: {
                  lat: 34.033142,
                  lng: -118.466515
                },
                content: '<h1>Onica</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.39774,
                  lng: -122.030158
                },
                content: '<h1>Ooma</h1>' + '<h2>Telecommunications</h2>'
              },
              {
                coords: {
                  lat: 34.050848,
                  lng: -118.260782
                },
                content: '<h1>Open Bank</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 37.48584,
                  lng: -122.211947
                },
                content: '<h1>OpenGov</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.500429,
                  lng: -122.26094
                },
                content: '<h1>Oportun</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 34.089767,
                  lng: -118.347449
                },
                content: '<h1>Oprah</h1>' + '<h2>Media & Internet</h2>'
              },
              {
                coords: {
                  lat: 37.786056,
                  lng: -122.39866
                },
                content: '<h1>Optimizely</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 33.695835,
                  lng: -117.857311
                },
                content: '<h1>Opus Bank</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 37.530666,
                  lng: -122.262434
                },
                content: '<h1>Oracle</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 33.758751,
                  lng: -117.834252
                },
                content: '<h1>Orange Coast Title</h1>' + '<h2>Real Estate</h2>'
              },
              {
                coords: {
                  lat: 33.716329,
                  lng: -117.945805
                },
                content: '<h1>Orange County Water District</h1>' + '<h2>Energy, Utilities & Waste</h2>'
              },
              {
                coords: {
                  lat: 33.694027,
                  lng: -117.971377
                },
                content: '<h1>Orange County, CA - Orange County Sanitation District</h1>' + '<h2>Energy, Utilities & Waste</h2>'
              },
              {
                coords: {
                  lat: 37.421017,
                  lng: -122.142059
                },
                content: '<h1>Orbital Insight</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.778008,
                  lng: -122.431272
                },
                content: '<h1>Orrick, Herrington & Sutcliffe</h1>' + '<h2>Law Firms & Legal Services</h2>'
              },
              {
                coords: {
                  lat: 34.178064,
                  lng: -118.59721
                },
                content: '<h1>OSI Digital</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.717823,
                  lng: -122.160302
                },
                content: '<h1>OSIsoft</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 38.574448,
                  lng: -121.507106
                },
                content: '<h1>Otto Construction</h1>' + '<h2>Construction</h2>'
              },
              {
                coords: {
                  lat: 33.86339,
                  lng: -117.801731
                },
                content: '<h1>Outdoor Dimensions</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 34.156036,
                  lng: -118.334687
                },
                content: '<h1>Outlook Amusements</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.967435,
                  lng: -122.357818
                },
                content: '<h1>Overaa Construction</h1>' + '<h2>Construction</h2>'
              },
              {
                coords: {
                  lat: 32.823057,
                  lng: -117.157693
                },
                content: '<h1>Overland Tandberg</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.138492,
                  lng: -118.706256
                },
                content: '<h1>Oxford Global Resources</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 34.06191,
                  lng: -118.416909
                },
                content: '<h1>Pachulski Stang Ziehl & Jones</h1>' + '<h2>Law Firms & Legal Services</h2>'
              },
              {
                coords: {
                  lat: 37.499468,
                  lng: -122.143871
                },
                content: '<h1>Pacific Biosciences</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.062328,
                  lng: -118.306798
                },
                content: '<h1>Pacific City Bank</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 38.585592,
                  lng: -121.292846
                },
                content: '<h1>Pacific Coast Building Products</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 33.680929,
                  lng: -117.196659
                },
                content: '<h1>Pacific Communities Builder</h1>' + '<h2>Real Estate</h2>'
              },
              {
                coords: {
                  lat: 34.136542,
                  lng: -118.821533
                },
                content: '<h1>Pacific Compensation Insurance</h1>' + '<h2>Insurance</h2>'
              },
              {
                coords: {
                  lat: 38.578336,
                  lng: -121.502451
                },
                content: '<h1>Pacific Ethanol</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37791789,
                  lng: -122395797
                },
                content: '<h1>Pacific Gas And Electric</h1>' + '<h2>Energy, Utilities & Waste</h2>'
              },
              {
                coords: {
                  lat: 33.607945,
                  lng: -117.878704
                },
                content: '<h1>Pacific Life Companies</h1>' + '<h2>Insurance</h2>'
              },
              {
                coords: {
                  lat: 37.748729,
                  lng: -121.39728
                },
                content: '<h1>Pacific Medical</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 33.689266,
                  lng: -117.896532
                },
                content: '<h1>Pacific Mercantile Bank</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 34.033564,
                  lng: -117.948463
                },
                content: '<h1>Pacific Palms Resort</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 32.870905,
                  lng: -117.226969
                },
                content: '<h1>Pacific Pearl Hotels</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 33.683072,
                  lng: -117.849701
                },
                content: '<h1>Pacific Premier Bank</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 32.834264,
                  lng: -117.154779
                },
                content: '<h1>Pacific Rim Mechanical</h1>' + '<h2>Construction</h2>'
              },
              {
                coords: {
                  lat: 37.66341,
                  lng: -120.990112
                },
                content: '<h1>Pacific Southwest Container</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.079068,
                  lng: -118.404821
                },
                content: '<h1>Pacific Western Bank</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 33.59168,
                  lng: -117.724897
                },
                content: '<h1>Pacifica Hotels</h1>' + '<h2>Real Estate</h2>'
              },
              {
                coords: {
                  lat: 33.86093,
                  lng: -117.845144
                },
                content: '<h1>PacSun</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 34.067388,
                  lng: -118.406645
                },
                content: '<h1>PacWest Bancorp</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 36.84289,
                  lng: -119.846081
                },
                content: '<h1>Paige Electric</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 33.157525,
                  lng: -117.186151
                },
                content: '<h1>Pala Band</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 33.606314,
                  lng: -117.872805
                },
                content: '<h1>Palace Entertainment</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 34.021711,
                  lng: -118.479052
                },
                content: '<h1>Palisades MediaGroup</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.384137,
                  lng: -121.982492
                },
                content: '<h1>Palo Alto Networks</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 33.133711,
                  lng: -117.256231
                },
                content: '<h1>Palomar Technologies</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.356651,
                  lng: -121.961118
                },
                content: '<h1>PalPilot International</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 33.861301,
                  lng: -118.034752
                },
                content: '<h1>Pamarco</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.778527,
                  lng: -122.391696
                },
                content: '<h1>Pan Pacific Hotels Group</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 37.393509,
                  lng: -122.04068
                },
                content: '<h1>Panasas</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 38.773526,
                  lng: -121.270083
                },
                content: '<h1>Panda Express</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 34.14248,
                  lng: -118.14186
                },
                content: '<h1>Pankow</h1>' + '<h2>Construction</h2>'
              },
              {
                coords: {
                  lat: 33.824243,
                  lng: -117.864736
                },
                content: '<h1>Paper Mart</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 37.389441,
                  lng: -121.933291
                },
                content: '<h1>Parade Technologies</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.921308,
                  lng: -122.014741
                },
                content: '<h1>Paradigm Outcomes</h1>' + '<h2>Insurance</h2>'
              },
              {
                coords: {
                  lat: 34.066697,
                  lng: -118.387162
                },
                content: '<h1>Paradigm Talent Agency</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.148666,
                  lng: -121.667184
                },
                content: '<h1>Paramit</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.083634,
                  lng: -118.32191
                },
                content: '<h1>Paramount Pictures</h1>' + '<h2>Media & Internet</h2>'
              },
              {
                coords: {
                  lat: 33.868727,
                  lng: -117.541717
                },
                content: '<h1>Paramount Residential Mortgage Group</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 33.651143,
                  lng: -117.71211
                },
                content: '<h1>Parcel Pending</h1>' + '<h2>Minerals & Mining</h2>'
              },
              {
                coords: {
                  lat: 33.636816,
                  lng: -117.605756
                },
                content: '<h1>Park West Companies</h1>' + '<h2>Consumer Services</h2>'
              },
              {
                coords: {
                  lat: 34.148591,
                  lng: -118.152375
                },
                content: '<h1>Parsons</h1>' + '<h2>Construction</h2>'
              },
              {
                coords: {
                  lat: 33.836193,
                  lng: -118.320637
                },
                content: '<h1>Partner Engineering And Science</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 34.279694,
                  lng: -119.304047
                },
                content: '<h1>Patagonia</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 37.800116,
                  lng: -122.402203
                },
                content: '<h1>Pattern Energy</h1>' + '<h2>Energy, Utilities & Waste</h2>'
              },
              {
                coords: {
                  lat: 34.051341,
                  lng: -118.256611
                },
                content: '<h1>Paul Hastings</h1>' + '<h2>Law Firms & Legal Services</h2>'
              },
              {
                coords: {
                  lat: 34.15775,
                  lng: -118.500706
                },
                content: '<h1>Payden  Rygel</h1>' + '<h2>Insurance</h2>'
              },
              {
                coords: {
                  lat: 37.531921,
                  lng: -122.023399
                },
                content: '<h1>Payment Processing</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 33.678865,
                  lng: -117.83794
                },
                content: '<h1>Payne & Fears</h1>' + '<h2>Law Firms & Legal Services</h2>'
              },
              {
                coords: {
                  lat: 37.391474,
                  lng: -121.931977
                },
                content: '<h1>PayPal</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 33.923013,
                  lng: -118.393576
                },
                content: '<h1>PCM</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 34.062473,
                  lng: -117.800752
                },
                content: '<h1>PCV Murcor</h1>' + '<h2>Real Estate</h2>'
              },
              {
                coords: {
                  lat: 37.368801,
                  lng: -121.941573
                },
                content: '<h1>PDF Solutions</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 36.574793,
                  lng: -121.912982
                },
                content: '<h1>Pebble Beach</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 33.47559,
                  lng: -117.129189
                },
                content: '<h1>Pechanga Resort Casino</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 37.831261,
                  lng: -122.285523
                },
                content: '<h1>Peets Coffee & Tea</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 36.844817,
                  lng: -119.721694
                },
                content: '<h1>Pelco</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 33.814745,
                  lng: -118.344023
                },
                content: '<h1>Pelican Products</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.136542,
                  lng: -118.821533
                },
                content: '<h1>PennyMac Mortgage Investment Trust</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 34.047392,
                  lng: -118.446086
                },
                content: '<h1>Penske Media Corporation.</h1>' + '<h2>Media & Internet</h2>'
              },
              {
                coords: {
                  lat: 33.844421,
                  lng: -118.335905
                },
                content: '<h1>Pentel of America</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 37.737572,
                  lng: -122.245507
                },
                content: '<h1>Penumbra</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 32.888972,
                  lng: -117.174916
                },
                content: '<h1>Peregrine Semiconductor</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 32.769263,
                  lng: -117.134711
                },
                content: '<h1>Performance Designed Products</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 33.927016,
                  lng: -118.399564
                },
                content: '<h1>Performance Team</h1>' + '<h2>Transportation</h2>'
              },
              {
                coords: {
                  lat: 37.381952,
                  lng: -121.959879
                },
                content: '<h1>Persistent</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.52595,
                  lng: -122.261878
                },
                content: '<h1>Personal Capital</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.757625,
                  lng: -122.168705
                },
                content: '<h1>Pet Food Express</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 33.014556,
                  lng: -117.097235
                },
                content: '<h1>Petco Animal Supplies</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.555379,
                  lng: -121.976736
                },
                content: '<h1>PetersenDean</h1>' + '<h2>Construction</h2>'
              },
              {
                coords: {
                  lat: 37.786815,
                  lng: -122.398659
                },
                content: '<h1>PGH Wong Engineering</h1>' + '<h2>Construction</h2>'
              },
              {
                coords: {
                  lat: 34.221718,
                  lng: -118.623512
                },
                content: '<h1>Pharmavite</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 33.844694,
                  lng: -118.32498
                },
                content: '<h1>Phenomenex</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.947528,
                  lng: -122.490606
                },
                content: '<h1>Phoenix American Financial Services</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 33.845321,
                  lng: -118.325348
                },
                content: '<h1>Physical Optics Corporation</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.395969,
                  lng: -121.978759
                },
                content: '<h1>Picarro</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 33.672421,
                  lng: -117.764394
                },
                content: '<h1>Piercey Automotive Group</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 34.283415,
                  lng: -118.896774
                },
                content: '<h1>Pindler & Pindler</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.771566,
                  lng: -122.405114
                },
                content: '<h1>Pinterest</h1>' + '<h2>Media & Internet</h2>'
              },
              {
                coords: {
                  lat: 34.249821,
                  lng: -118.59663
                },
                content: '<h1>Pipedream Products</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 37.368812,
                  lng: -121.959526
                },
                content: '<h1>Pivot Interiors, Inc.</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.781681,
                  lng: -122.404102
                },
                content: '<h1>Pivotal</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 33.987633,
                  lng: -118.470825
                },
                content: '<h1>Planet Blue</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 37.621382,
                  lng: -122.052523
                },
                content: '<h1>Plastikon</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.057997,
                  lng: -118.445973
                },
                content: '<h1>Playboy Enterprises</h1>' + '<h2>Media & Internet</h2>'
              },
              {
                coords: {
                  lat: 37.580312,
                  lng: -122.343575
                },
                content: '<h1>PlayStudios</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 32.909717,
                  lng: -117.181671
                },
                content: '<h1>Plaza Home Mortgage</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 37.38392,
                  lng: -122.01287
                },
                content: '<h1>Plug and Play Tech Center</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 39.929416,
                  lng: -120.951994
                },
                content: '<h1>Plumas Bank</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 38.43448,
                  lng: -122.692134
                },
                content: '<h1>PM Design Group</h1>' + '<h2>Construction</h2>'
              },
              {
                coords: {
                  lat: 36.986517,
                  lng: -122.036754
                },
                content: '<h1>Polycom Collaboration Solutions</h1>' + '<h2>Telecommunications</h2>'
              },
              {
                coords: {
                  lat: 37.794175,
                  lng: -122.276067
                },
                content: '<h1>Port of Oakland</h1>' + '<h2>Transportation</h2>'
              },
              {
                coords: {
                  lat: 37.652641,
                  lng: -122.396484
                },
                content: '<h1>Portola Pharmaceuticals</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 33.85409,
                  lng: -117.864447
                },
                content: '<h1>Power Plus Equipment</h1>' + '<h2>Construction</h2>'
              },
              {
                coords: {
                  lat: 38.657759,
                  lng: -121.18856
                },
                content: '<h1>PowerSchool</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.786837,
                  lng: -122.404139
                },
                content: '<h1>Practice Fusion</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 34.050759,
                  lng: -118.25881
                },
                content: '<h1>Preferred Bank</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 34.239267,
                  lng: -118.566574
                },
                content: '<h1>Premier America Credit Union</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 33.680073,
                  lng: -117.855027
                },
                content: '<h1>Premier Workspaces</h1>' + '<h2>Real Estate</h2>'
              },
              {
                coords: {
                  lat: 34.153556,
                  lng: -118.4658
                },
                content: '<h1>Premiere Radio Networks</h1>' + '<h2>Telecommunications</h2>'
              },
              {
                coords: {
                  lat: 33.647152,
                  lng: -117.71354
                },
                content: '<h1>PrescribeWellness</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.354559,
                  lng: -121.883844
                },
                content: '<h1>Presto Engineering</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 32.897361,
                  lng: -117.203537
                },
                content: '<h1>Pricesmart</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 34.046796,
                  lng: -117.174269
                },
                content: '<h1>Prime-Line Products</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 37.796895,
                  lng: -122.40155
                },
                content: '<h1>Primitive Logic</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 34.417696,
                  lng: -118.560758
                },
                content: '<h1>Princess Cruises</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 33.718221,
                  lng: -117.798839
                },
                content: '<h1>Principal Technical Services</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 32.816943,
                  lng: -117.131723
                },
                content: '<h1>Pristine Environments</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 33.624494,
                  lng: -117.680153
                },
                content: '<h1>Pro Pipe</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 34.38366,
                  lng: -119.491515
                },
                content: '<h1>Procore</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 33.916723,
                  lng: -118.402015
                },
                content: '<h1>Prodege</h1>' + '<h2>Media & Internet</h2>'
              },
              {
                coords: {
                  lat: 34.05513,
                  lng: -118.25703
                },
                content: '<h1>Progressive Produce</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 34.000764,
                  lng: -117.918169
                },
                content: '<h1>Prolacta Bioscience</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.778008,
                  lng: -122.431272
                },
                content: '<h1>ProLogis</h1>' + '<h2>Real Estate</h2>'
              },
              {
                coords: {
                  lat: 32.888859,
                  lng: -117.17329
                },
                content: '<h1>Prometheus Laboratories</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.552506,
                  lng: -122.29233
                },
                content: '<h1>Prometheus Real Estate</h1>' + '<h2>Real Estate</h2>'
              },
              {
                coords: {
                  lat: 37.400826,
                  lng: -122.031544
                },
                content: '<h1>Proofpoint</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 34.018071,
                  lng: -118.491029
                },
                content: '<h1>Proper Hospitality</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 33.915677,
                  lng: -117.854424
                },
                content: '<h1>Proponent</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 33.509845,
                  lng: -117.157053
                },
                content: '<h1>ProSites</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 35.341855,
                  lng: -119.106965
                },
                content: '<h1>ProSoft Technology</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.79046,
                  lng: -122.392105
                },
                content: '<h1>Prosper</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 37.597468,
                  lng: -122.380219
                },
                content: '<h1>Proterra</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.537721,
                  lng: -122.256237
                },
                content: '<h1>Proteus Digital Health</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.421345,
                  lng: -122.214459
                },
                content: '<h1>Protiviti</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 33.953212,
                  lng: -117.395555
                },
                content: '<h1>Provident Bank</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 37.354559,
                  lng: -121.883844
                },
                content: '<h1>Prysm</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.166663,
                  lng: -118.295409
                },
                content: '<h1>PS Business Parks</h1>' + '<h2>Real Estate</h2>'
              },
              {
                coords: {
                  lat: 34.176355,
                  lng: -118.24774
                },
                content: '<h1>PSI Services</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 35.374018,
                  lng: -119.017297
                },
                content: '<h1>Psomas</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 33.988766,
                  lng: -118.459156
                },
                content: '<h1>Psyop</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 34.206283,
                  lng: -119.128527
                },
                content: '<h1>PTI Technologies</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.166663,
                  lng: -118.295409
                },
                content: '<h1>Public Storage</h1>' + '<h2>Transportation</h2>'
              },
              {
                coords: {
                  lat: 37.492685,
                  lng: -122.227751
                },
                content: '<h1>PubMatic</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 32.992947,
                  lng: -117.077156
                },
                content: '<h1>Pulse Electronics</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.39158,
                  lng: -121.925923
                },
                content: '<h1>Pulse Secure</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 34.058847,
                  lng: -118.442828
                },
                content: '<h1>Puma Biotechnology</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.562052,
                  lng: -122.308504
                },
                content: '<h1>Punchh</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.38804,
                  lng: -122.083005
                },
                content: '<h1>Pure Storage</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 34.011946,
                  lng: -118.396248
                },
                content: '<h1>Q-Tech</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.389656,
                  lng: -119.702652
                },
                content: '<h1>QAD</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 32.764198,
                  lng: -117.165458
                },
                content: '<h1>Qdoba</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 33.665019,
                  lng: -117.920311
                },
                content: '<h1>QSC Audio Products</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 32.895996,
                  lng: -117.195807
                },
                content: '<h1>Qualcomm</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.550517,
                  lng: -122.281785
                },
                content: '<h1>Qualys</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.394105,
                  lng: -121.887379
                },
                content: '<h1>Quantenna</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.369292,
                  lng: -121.921214
                },
                content: '<h1>Quantum</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 33.666194,
                  lng: -117.689567
                },
                content: '<h1>Quantum Fuel Systems Technologies Worldwide</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.35523,
                  lng: -121.945317
                },
                content: '<h1>Qubole</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 38.79081,
                  lng: -121.314935
                },
                content: '<h1>Quest Media & Supplies</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 33.584102,
                  lng: -117.723208
                },
                content: '<h1>Quest Software</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 32.946149,
                  lng: -117.241917
                },
                content: '<h1>Quidel</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.05075,
                  lng: -118.459614
                },
                content: '<h1>Quigley-Simpson</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 34.04661,
                  lng: -118.26273
                },
                content: '<h1>Quinn Emanuel Urquhart & Sullivan</h1>' + '<h2>Law Firms & Legal Services</h2>'
              },
              {
                coords: {
                  lat: 37.558211,
                  lng: -122.276318
                },
                content: '<h1>QuinStreet</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.397455,
                  lng: -122.050464
                },
                content: '<h1>Quotient</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 38.639473,
                  lng: -121.070279
                },
                content: '<h1>R Systems</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.371168,
                  lng: -121.999089
                },
                content: '<h1>R.S. Hughes</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.049263,
                  lng: -118.447758
                },
                content: '<h1>RadNet</h1>' + '<h2>Healthcare Services</h2>'
              },
              {
                coords: {
                  lat: 38.654946,
                  lng: -121.538883
                },
                content: '<h1>RagingWire</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 33.650964,
                  lng: -117.734351
                },
                content: '<h1>RailPros</h1>' + '<h2>Construction</h2>'
              },
              {
                coords: {
                  lat: 35.406551,
                  lng: -119.044942
                },
                content: '<h1>RAIN</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 38.582902,
                  lng: -121.51474
                },
                content: '<h1>Raleys</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 37.40452,
                  lng: -122.03597
                },
                content: '<h1>Rambus</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.255766,
                  lng: -118.755733
                },
                content: '<h1>Rapattoni</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 33.844396,
                  lng: -118.337252
                },
                content: '<h1>Rapiscan</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.785066,
                  lng: -122.399955
                },
                content: '<h1>Razer</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.052321,
                  lng: -118.262897
                },
                content: '<h1>Rbb Bancorp</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 33.985503,
                  lng: -118.396074
                },
                content: '<h1>Reading International</h1>' + '<h2>Real Estate</h2>'
              },
              {
                coords: {
                  lat: 34.067386,
                  lng: -118.408453
                },
                content: '<h1>RealD</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 32.937733,
                  lng: -117.237077
                },
                content: '<h1>Realty Income</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 35.257976,
                  lng: -120.646146
                },
                content: '<h1>REC Solar</h1>' + '<h2>Energy, Utilities & Waste</h2>'
              },
              {
                coords: {
                  lat: 37.794057,
                  lng: -122.397296
                },
                content: '<h1>Recology</h1>' + '<h2>Energy, Utilities & Waste</h2>'
              },
              {
                coords: {
                  lat: 34.030088,
                  lng: -118.467165
                },
                content: '<h1>Red Bull</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 38.730892,
                  lng: -120.801404
                },
                content: '<h1>Red Hawk Casino</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 32.719639,
                  lng: -117.168561
                },
                content: '<h1>Redhorse</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 38.594425,
                  lng: -121.284839
                },
                content: '<h1>Redtail Technology</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.910791,
                  lng: -122.544205
                },
                content: '<h1>Redwood Trust</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 34.114455,
                  lng: -118.322388
                },
                content: '<h1>Reel FX</h1>' + '<h2>Media & Internet</h2>'
              },
              {
                coords: {
                  lat: 34.238861,
                  lng: -118.604108
                },
                content: '<h1>Regency Lighting</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 33.45274,
                  lng: -117.595386
                },
                content: '<h1>Regenesis</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 34.05513,
                  lng: -118.25703
                },
                content: '<h1>Rehrig Pacific</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.921308,
                  lng: -122.014741
                },
                content: '<h1>Relation Insurance</h1>' + '<h2>Insurance</h2>'
              },
              {
                coords: {
                  lat: 34.051727,
                  lng: -118.252195
                },
                content: '<h1>Reliance Steel & Aluminum</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.528079,
                  lng: -122.262656
                },
                content: '<h1>Reltio</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 33.018744,
                  lng: -117.1023
                },
                content: '<h1>REMEC</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.43325,
                  lng: -119.82839
                },
                content: '<h1>RENTCafe.com</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.52595,
                  lng: -122.261878
                },
                content: '<h1>Replicon</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 34.155842,
                  lng: -118.478117
                },
                content: '<h1>Reprints Desk</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 34.155842,
                  lng: -118.478117
                },
                content: '<h1>Republic Indemnity</h1>' + '<h2>Insurance</h2>'
              },
              {
                coords: {
                  lat: 37.436207,
                  lng: -121.892013
                },
                content: '<h1>Resilinc</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 32.825603,
                  lng: -117.134206
                },
                content: '<h1>ResMed</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.918776,
                  lng: -122.510413
                },
                content: '<h1>Restoration Hardware</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 37.354559,
                  lng: -121.883844
                },
                content: '<h1>Retail Solutions</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 32.937157,
                  lng: -117.234596
                },
                content: '<h1>Retrophin</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.790548,
                  lng: -122.404229
                },
                content: '<h1>Rev.com</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.520012,
                  lng: -122.03178
                },
                content: '<h1>Revance Therapeutics</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 33.710889,
                  lng: -117.829681
                },
                content: '<h1>RGP</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 33.855981,
                  lng: -118.004034
                },
                content: '<h1>Ria Money Transfer</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 33.664707,
                  lng: -117.865542
                },
                content: '<h1>Rigel Networks</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.510825,
                  lng: -122.306653
                },
                content: '<h1>RingCentral</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 33.575177,
                  lng: -117.723506
                },
                content: '<h1>Ringler Associates</h1>' + '<h2>Law Firms & Legal Services</h2>'
              },
              {
                coords: {
                  lat: 37.792134,
                  lng: -122.403072
                },
                content: '<h1>Ripple</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 37.354559,
                  lng: -121.883844
                },
                content: '<h1>Rishabh Software</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 38.609404,
                  lng: -121.507036
                },
                content: '<h1>River City Bank</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 38.713928,
                  lng: -122.894639
                },
                content: '<h1>River Rock Casino</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 37.784629,
                  lng: -122.398538
                },
                content: '<h1>Riverbed Technology</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 38.076012,
                  lng: -122.116249
                },
                content: '<h1>RIX Industries</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 37.520012,
                  lng: -122.03178
                },
                content: '<h1>RMS</h1>' + '<h2>Insurance</h2>'
              },
              {
                coords: {
                  lat: 32.840351,
                  lng: -117.164848
                },
                content: '<h1>Road Runner Sports</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 37.421345,
                  lng: -122.214459
                },
                content: '<h1>Robert Half International</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 33.750748,
                  lng: -118.03324
                },
                content: '<h1>Rocket Lab</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 34.058859,
                  lng: -118.416419
                },
                content: '<h1>Rockwood Capital</h1>' + '<h2>Real Estate</h2>'
              },
              {
                coords: {
                  lat: 37.79261,
                  lng: -122.394567
                },
                content: '<h1>Rodan & Fields</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 34.061902,
                  lng: -118.414995
                },
                content: '<h1>Rogers & Cowan</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.809399,
                  lng: -122.268419
                },
                content: '<h1>Roofstock</h1>' + '<h2>Real Estate</h2>'
              },
              {
                coords: {
                  lat: 34.000446,
                  lng: -118.055806
                },
                content: '<h1>Rose Hills</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 37.362611,
                  lng: -121.881722
                },
                content: '<h1>Rosendin Electric</h1>' + '<h2>Construction</h2>'
              },
              {
                coords: {
                  lat: 34.092552,
                  lng: -118.379083
                },
                content: '<h1>Rosewood Hotel Group</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 37.710271,
                  lng: -121.890004
                },
                content: '<h1>Ross Stores</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 33.62204,
                  lng: -117.879327
                },
                content: '<h1>Roth Capital Partners</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 33.802647,
                  lng: -117.84931
                },
                content: '<h1>Roth Staffing Companies</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.790502,
                  lng: -122.399244
                },
                content: '<h1>RPX</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.410451,
                  lng: -122.016118
                },
                content: '<h1>RTI</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.417491,
                  lng: -122.145166
                },
                content: '<h1>Rubrik</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 36.531544,
                  lng: -119.586168
                },
                content: '<h1>Rubys Diner</h1>' + '<h2>Hospitality</h2>'
              },
              {
                coords: {
                  lat: 36.539864,
                  lng: -119.397796
                },
                content: '<h1>Ruiz Foods</h1>' + '<h2>Manufacturing</h2>'
              },
              {
                coords: {
                  lat: 33.666818,
                  lng: -117.7594
                },
                content: '<h1>Rushmore Loan Management Services</h1>' + '<h2>Finance</h2>'
              },
              {
                coords: {
                  lat: 33.690206,
                  lng: -117.877915
                },
                content: '<h1>Rutan & Tucker, LLP.</h1>' + '<h2>Law Firms & Legal Services</h2>'
              },
              {
                coords: {
                  lat: 34.185797,
                  lng: -118.322584
                },
                content: '<h1>Ryan Herco Flow Solutions</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 33.828302,
                  lng: -117.852806
                },
                content: '<h1>SA Recycling</h1>' + '<h2>Energy, Utilities & Waste</h2>'
              },
              {
                coords: {
                  lat: 34.204681,
                  lng: -118.985891
                },
                content: '<h1>Saalex Solutions</h1>' + '<h2>Business Services</h2>'
              },
              {
                coords: {
                  lat: 37.293117,
                  lng: -121.934388
                },
                content: '<h1>Saama</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 37.705984,
                  lng: -121.922256
                },
                content: '<h1>Saba Software</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 38.568857,
                  lng: -121.470192
                },
                content: '<h1>Sacramento Regional Transit</h1>' + '<h2>Transportation</h2>'
              },
              {
                coords: {
                  lat: 38.093109,
                  lng: -122.557637
                },
                content: '<h1>SafetyChain Software</h1>' + '<h2>Software</h2>'
              },
              {
                coords: {
                  lat: 33.832402,
                  lng: -118.341001
                },
                content: '<h1>Sakura Finetek USA</h1>' + '<h2>Retail</h2>'
              },
              {
                coords: {
                  lat: 37.336264,
                  lng: -121.876649
                },
                content: '<h1>Salas OBrien < /h1>' + '<h2>Construction</h2 > ' }, {
                  coords: {
                    lat: 34.217249,
                    lng: -119.004952
                  },
                  content: '<h1>Salem Media</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 37.789825,
                    lng: -122.397265
                  },
                  content: '<h1>Salesforce.com</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.778008,
                    lng: -122.431272
                  },
                  content: '<h1>Samba TV</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 32.839067,
                    lng: -117.27757
                  },
                  content: '<h1>Sammys Woodfired Pizza</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.506473,
                    lng: -122.261967
                  },
                  content: '<h1>SamTrans</h1>' + '<h2>Transportation</h2>'
                },
                {
                  coords: {
                    lat: 32.877717,
                    lng: -117.204749
                  },
                  content: '<h1>Samumed</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 32.72793,
                    lng: -117.15529
                  },
                  content: '<h1>San Diego County Credit Union</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 37.403445,
                    lng: -121.966837
                  },
                  content: '<h1>San Francisco 49ers</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.782154,
                    lng: -122.406601
                  },
                  content: '<h1>San Francisco Chronicle</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 37.778632,
                    lng: -122.420493
                  },
                  content: '<h1>San Francisco Opera</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.330034,
                    lng: -121.891703
                  },
                  content: '<h1>San Jose Convention Center</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.347837,
                    lng: -121.901538
                  },
                  content: '<h1>San Jose Water</h1>' + '<h2>Energy, Utilities & Waste</h2>'
                },
                {
                  coords: {
                    lat: 34.116766,
                    lng: -117.158503
                  },
                  content: '<h1>San Manuel Casino</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.952449,
                    lng: -122.334552
                  },
                  content: '<h1>San Pablo Lytton Casino</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.416961,
                    lng: -121.92385
                  },
                  content: '<h1>SanDisk</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.919882,
                    lng: -122.367443
                  },
                  content: '<h1>Sangamo Therapeutics</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.450032,
                    lng: -122.120946
                  },
                  content: '<h1>Sankalp Semiconductor</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.391474,
                    lng: -121.931977
                  },
                  content: '<h1>Sanmina</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.135028,
                    lng: -118.041108
                  },
                  content: '<h1>Santa Anita Park</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 37.234109,
                    lng: -121.775109
                  },
                  content: '<h1>Santa Clara Family Health Plan</h1>' + '<h2>Consumer Services</h2>'
                },
                {
                  coords: {
                    lat: 37.396798,
                    lng: -122.146238
                  },
                  content: '<h1>SAP Ariba</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.560202,
                    lng: -122.287376
                  },
                  content: '<h1>Sares Regis Group of Northern California, LLC</h1>' + '<h2>Real Estate</h2>'
                },
                {
                  coords: {
                    lat: 37.66341,
                    lng: -120.990112
                  },
                  content: '<h1>Save Mart Supermarkets</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 34.062101,
                    lng: -118.358605
                  },
                  content: '<h1>SBE</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 39.145349,
                    lng: -121.430386
                  },
                  content: '<h1>SBM Site Services</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 35.249529,
                    lng: -120.627712
                  },
                  content: '<h1>SCA Appraisal</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 35.056385,
                    lng: -118.154391
                  },
                  content: '<h1>Scaled Composites</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.79258,
                    lng: -122.403518
                  },
                  content: '<h1>Scality</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.788902,
                    lng: -122.398149
                  },
                  content: '<h1>Scandit</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.315398,
                    lng: -120.5157
                  },
                  content: '<h1>Scholle IPN</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 38.463407,
                    lng: -122.718931
                  },
                  content: '<h1>SCHURTER</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.837997,
                    lng: -122.300853
                  },
                  content: '<h1>Scientific Certification Systems</h1>' + '<h2>Hospitals & Physicians Clinics</h2>'
                },
                {
                  coords: {
                    lat: 37.322738,
                    lng: -121.987889
                  },
                  content: '<h1>Sciforma</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 34.139271,
                    lng: -117.274009
                  },
                  content: '<h1>Scorpion Design</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 34.185628,
                    lng: -119.164025
                  },
                  content: '<h1>Scosche Industries</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.809677,
                    lng: -118.146166
                  },
                  content: '<h1>SCS ENGINEERS</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 32.824515,
                    lng: -117.14306
                  },
                  content: '<h1>SDG&E</h1>' + '<h2>Energy, Utilities & Waste</h2>'
                },
                {
                  coords: {
                    lat: 33.976021,
                    lng: -118.390728
                  },
                  content: '<h1>SDI Media</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.319939,
                    lng: -122.032415
                  },
                  content: '<h1>Seagate Technology</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.544858,
                    lng: -122.2911
                  },
                  content: '<h1>Searchmetrics</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.12859,
                    lng: -117.31725
                  },
                  content: '<h1>SeaSpine</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.30149,
                    lng: -118.461063
                  },
                  content: '<h1>Second Sight</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.640513,
                    lng: -117.741376
                  },
                  content: '<h1>SecureAuth</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.844218,
                    lng: -118.220926
                  },
                  content: '<h1>Sees Candies</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.433179,
                    lng: -119.843149
                  },
                  content: '<h1>Seek Thermal</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.793949,
                    lng: -122.398062
                  },
                  content: '<h1>Segment.io, Inc.</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 32.948645,
                    lng: -117.237769
                  },
                  content: '<h1>Seismic Software</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.789318,
                    lng: -122.400655
                  },
                  content: '<h1>SelectQuote Insurance Services</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 32.718081,
                    lng: -117.157899
                  },
                  content: '<h1>Seltzer Caplan McMahon Vitek</h1>' + '<h2>Law Firms & Legal Services</h2>'
                },
                {
                  coords: {
                    lat: 34.21816,
                    lng: -119.021465
                  },
                  content: '<h1>Semtech</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 32.990868,
                    lng: -117.260651
                  },
                  content: '<h1>Senior Resource Group</h1>' + '<h2>Healthcare Services</h2>'
                },
                {
                  coords: {
                    lat: 36.836483,
                    lng: -119.80876
                  },
                  content: '<h1>Sensiba San Filippo</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.872787,
                    lng: -122.301815
                  },
                  content: '<h1>Sensys Networks, Inc.</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.601285,
                    lng: -122.373682
                  },
                  content: '<h1>Sentient Energy</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.790631,
                    lng: -122.399326
                  },
                  content: '<h1>Sephora USA</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.696803,
                    lng: -121.883563
                  },
                  content: '<h1>ServiceMax</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.37606,
                    lng: -121.963783
                  },
                  content: '<h1>ServiceNow</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 34.157924,
                    lng: -118.255744
                  },
                  content: '<h1>ServiceTitan</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.391474,
                    lng: -121.931977
                  },
                  content: '<h1>Servion</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 34.456793,
                    lng: -118.581916
                  },
                  content: '<h1>SetPoint Medical</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.696968,
                    lng: -121.89708
                  },
                  content: '<h1>Shaklee</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 32.941571,
                    lng: -117.239552
                  },
                  content: '<h1>Sheppard Mullin</h1>' + '<h2>Law Firms & Legal Services</h2>'
                },
                {
                  coords: {
                    lat: 32.727278,
                    lng: -117.19778
                  },
                  content: '<h1>Sheraton San Diego Hotel & Marina</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 34.139271,
                    lng: -117.274009
                  },
                  content: '<h1>Shield HealthCare</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.988715,
                    lng: -122.108807
                  },
                  content: '<h1>Shields, Harper & Co.</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.738462,
                    lng: -122.200986
                  },
                  content: '<h1>Shimmick Construction</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 37.149653,
                    lng: -121.652007
                  },
                  content: '<h1>Shoe Palace</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.951776,
                    lng: -118.174587
                  },
                  content: '<h1>Shultz Steel</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.680616,
                    lng: -117.843276
                  },
                  content: '<h1>Shur-Lok</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.537721,
                    lng: -122.256237
                  },
                  content: '<h1>Shutterfly</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.351316,
                    lng: -121.934153
                  },
                  content: '<h1>SI-BONE</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.79937,
                    lng: -122.398409
                  },
                  content: '<h1>SIDEMAN & BANCROFT</h1>' + '<h2>Law Firms & Legal Services</h2>'
                },
                {
                  coords: {
                    lat: 34.4317,
                    lng: -119.873374
                  },
                  content: '<h1>Sientra</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 39.146607,
                    lng: -121.633009
                  },
                  content: '<h1>Sierra Central Credit Union</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 40.469701,
                    lng: -122.318412
                  },
                  content: '<h1>Sierra Pacific Industries</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.553395,
                    lng: -122.300233
                  },
                  content: '<h1>SiFive</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.576501,
                    lng: -122.044109
                  },
                  content: '<h1>Sigma Designs</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.138025,
                    lng: -117.289221
                  },
                  content: '<h1>Signet Armorlite, Inc.</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 32.721384,
                    lng: -117.098272
                  },
                  content: '<h1>Signtech Electrical Advertising</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 34.310553,
                    lng: -118.478717
                  },
                  content: '<h1>Sigue</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 32.879392,
                    lng: -117.203869
                  },
                  content: '<h1>Silanna</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.715742,
                    lng: -117.865662
                  },
                  content: '<h1>Silex Technology</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.179003,
                    lng: -118.600195
                  },
                  content: '<h1>Silgan Containers</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.179003,
                    lng: -118.600195
                  },
                  content: '<h1>Silgan Containers LLC</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.505027,
                    lng: -121.959723
                  },
                  content: '<h1>Silicon Power Computer & Communications</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.407492,
                    lng: -121.960841
                  },
                  content: '<h1>Silicon Valley Bank</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 37.420379,
                    lng: -122.213742
                  },
                  content: '<h1>Silver Lake Partners</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 37.37177,
                    lng: -121.944499
                  },
                  content: '<h1>Silver Peak</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 32.841101,
                    lng: -117.273042
                  },
                  content: '<h1>Silvergate Bank</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 37.684932,
                    lng: -121.894325
                  },
                  content: '<h1>Simpson Strong-Tie Company</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.057997,
                    lng: -118.445973
                  },
                  content: '<h1>SingerLewak</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.79304,
                    lng: -122.398032
                  },
                  content: '<h1>Sitecore</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.410001,
                    lng: -121.984064
                  },
                  content: '<h1>SiTime</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.788601,
                    lng: -122.398674
                  },
                  content: '<h1>Skava</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.884794,
                    lng: -118.410127
                  },
                  content: '<h1>Skechers</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.732249,
                    lng: -117.880826
                  },
                  content: '<h1>SkillSet Group</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 34.198209,
                    lng: -119.011114
                  },
                  content: '<h1>Skurka Aerospace</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.371174,
                    lng: -121.925672
                  },
                  content: '<h1>Skybox Security</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.014502,
                    lng: -117.078551
                  },
                  content: '<h1>Skyline</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 34.244865,
                    lng: -119.206467
                  },
                  content: '<h1>SL Power Electronics</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 38.810805,
                    lng: -121.287527
                  },
                  content: '<h1>SMA America</h1>' + '<h2>Energy, Utilities & Waste</h2>'
                },
                {
                  coords: {
                    lat: 34.006895,
                    lng: -118.152693
                  },
                  content: '<h1>Smart & Final</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.508337,
                    lng: -122.00146
                  },
                  content: '<h1>SMART Modular</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 32.915818,
                    lng: -117.112619
                  },
                  content: '<h1>SmartDraw</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 32.88163,
                    lng: -117.203649
                  },
                  content: '<h1>SmartDrive Systems, Inc.</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.672421,
                    lng: -117.764394
                  },
                  content: '<h1>SmartLabs</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 34.000764,
                    lng: -117.918169
                  },
                  content: '<h1>Snak King</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.015742,
                    lng: -118.454755
                  },
                  content: '<h1>Snap Inc.</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.799509,
                    lng: -116.931431
                  },
                  content: '<h1>Soboba Casino</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 38.611444,
                    lng: -122.871448
                  },
                  content: '<h1>SoFi United States</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 34.139271,
                    lng: -117.274009
                  },
                  content: '<h1>Softub</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 32.725842,
                    lng: -117.17221
                  },
                  content: '<h1>Solar Turbines</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.661743,
                    lng: -117.751716
                  },
                  content: '<h1>Solarflare Communications</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.876939,
                    lng: -118.046418
                  },
                  content: '<h1>Solaris Paper</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.417355,
                    lng: -119.698127
                  },
                  content: '<h1>Sonos</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.017223,
                    lng: -117.09243
                  },
                  content: '<h1>Sony Electronics</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.016931,
                    lng: -118.403673
                  },
                  content: '<h1>Sony Pictures Television</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 33.134293,
                    lng: -117.288916
                  },
                  content: '<h1>Sound</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.124845,
                    lng: -117.120251
                  },
                  content: '<h1>Sound Image</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 33.203629,
                    lng: -117.239309
                  },
                  content: '<h1>Sound United</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.408159,
                    lng: -121.98206
                  },
                  content: '<h1>SoundHound</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 34.221718,
                    lng: -118.623512
                  },
                  content: '<h1>Source Photonics</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.69014,
                    lng: -117.890335
                  },
                  content: '<h1>South Coast Plaza</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.499218,
                    lng: -117.153909
                  },
                  content: '<h1>South Coast Winery Resort & Spa</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.053949,
                    lng: -118.080241
                  },
                  content: '<h1>Southern California Edison</h1>' + '<h2>Energy, Utilities & Waste</h2>'
                },
                {
                  coords: {
                    lat: 34.103887,
                    lng: -117.873353
                  },
                  content: '<h1>SouthWest Water</h1>' + '<h2>Energy, Utilities & Waste</h2>'
                },
                {
                  coords: {
                    lat: 32.72793,
                    lng: -117.15529
                  },
                  content: '<h1>Space Micro</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.920246,
                    lng: -118.328016
                  },
                  content: '<h1>SpaceX</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.111355,
                    lng: -121.637702
                  },
                  content: '<h1>Specialized Bicycle Components</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.945271,
                    lng: -118.06779
                  },
                  content: '<h1>Spicers Paper</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.699456,
                    lng: -117.843562
                  },
                  content: '<h1>Spireon</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.78296,
                    lng: -122.391555
                  },
                  content: '<h1>Splunk</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 34.153289,
                    lng: -118.148936
                  },
                  content: '<h1>Spokeo</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 34.176355,
                    lng: -118.24774
                  },
                  content: '<h1>Sprinkles Cupcakes</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.791586,
                    lng: -122.394154
                  },
                  content: '<h1>Squar Milner</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.930371,
                    lng: -118.396798
                  },
                  content: '<h1>Square Enix</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.499468,
                    lng: -122.143871
                  },
                  content: '<h1>SRI International</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.411605,
                    lng: -121.917897
                  },
                  content: '<h1>SS8</h1>' + '<h2>Telecommunications</h2>'
                },
                {
                  coords: {
                    lat: 33.710889,
                    lng: -117.829681
                  },
                  content: '<h1>St. John Knits</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 34.130017,
                    lng: -118.000705
                  },
                  content: '<h1>STAAR Surgical</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.073901,
                    lng: -118.221126
                  },
                  content: '<h1>STADCO</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.918851,
                    lng: -118.391821
                  },
                  content: '<h1>Stamps.com</h1>' + '<h2>Transportation</h2>'
                },
                {
                  coords: {
                    lat: 37.798326,
                    lng: -122.400636
                  },
                  content: '<h1>Standish Management</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 37.407286,
                    lng: -122.072487
                  },
                  content: '<h1>Statcomm</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 38.595786,
                    lng: -121.486764
                  },
                  content: '<h1>State of California - California Lottery</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 33.698004,
                    lng: -117.863606
                  },
                  content: '<h1>Stearns Lending</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 37.79304,
                    lng: -122.398032
                  },
                  content: '<h1>Steelwave</h1>' + '<h2>Real Estate</h2>'
                },
                {
                  coords: {
                    lat: 37.403865,
                    lng: -121.913522
                  },
                  content: '<h1>Stellartech Research</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.596838,
                    lng: -122.401862
                  },
                  content: '<h1>Stem</h1>' + '<h2>Energy, Utilities & Waste</h2>'
                },
                {
                  coords: {
                    lat: 32.841101,
                    lng: -117.273042
                  },
                  content: '<h1>StepStone</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 33.854786,
                    lng: -117.536909
                  },
                  content: '<h1>Sterno</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.789249,
                    lng: -122.402419
                  },
                  content: '<h1>Stitch Fix</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 34.139271,
                    lng: -117.274009
                  },
                  content: '<h1>Stratasys Direct</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 33.860765,
                    lng: -117.815448
                  },
                  content: '<h1>Straub Distributing</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.451181,
                    lng: -122.178492
                  },
                  content: '<h1>StrawberryNET.com</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.789884,
                    lng: -122.394893
                  },
                  content: '<h1>StubHub</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 37.323867,
                    lng: -122.013402
                  },
                  content: '<h1>SugarCRM</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.834668,
                    lng: -117.94795
                  },
                  content: '<h1>Summit Interconnect</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.492685,
                    lng: -122.227751
                  },
                  content: '<h1>Sumo Logic</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.423017,
                    lng: -121.894778
                  },
                  content: '<h1>Suneratech</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.404995,
                    lng: -121.946595
                  },
                  content: '<h1>SunPower</h1>' + '<h2>Energy, Utilities & Waste</h2>'
                },
                {
                  coords: {
                    lat: 36.75156,
                    lng: -119.800612
                  },
                  content: '<h1>Sunrise Medical</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.682784,
                    lng: -117.851835
                  },
                  content: '<h1>Sunwest Bank</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 38.798401,
                    lng: -121.309584
                  },
                  content: '<h1>Sunworks</h1>' + '<h2>Energy, Utilities & Waste</h2>'
                },
                {
                  coords: {
                    lat: 37.513376,
                    lng: -120.863195
                  },
                  content: '<h1>Super Store Industries</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.943385,
                    lng: -118.26535
                  },
                  content: '<h1>Superior Grocers</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.709629,
                    lng: -117.951352
                  },
                  content: '<h1>SureFire</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.562052,
                    lng: -122.308504
                  },
                  content: '<h1>SurveyMonkey</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 37.646691,
                    lng: -122.399771
                  },
                  content: '<h1>Sutro Biopharma</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 38.262764,
                    lng: -122.273258
                  },
                  content: '<h1>Syar Industries</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.562052,
                    lng: -122.308504
                  },
                  content: '<h1>Sycomp</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 32.793513,
                    lng: -116.966042
                  },
                  content: '<h1>Sycuan Casino</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.397311,
                    lng: -122.054439
                  },
                  content: '<h1>Symantec</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.371174,
                    lng: -121.925672
                  },
                  content: '<h1>Symbio</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 32.820789,
                    lng: -117.135441
                  },
                  content: '<h1>Symitar</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.391622,
                    lng: -121.890872
                  },
                  content: '<h1>Synaptics</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.496357,
                    lng: -121.979836
                  },
                  content: '<h1>SYNNEX Corporation</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.394777,
                    lng: -122.050007
                  },
                  content: '<h1>Synopsys</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.687498,
                    lng: -117.833164
                  },
                  content: '<h1>Synoptek</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.52658,
                    lng: -122.206273
                  },
                  content: '<h1>Synthego</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.713534,
                    lng: -117.848148
                  },
                  content: '<h1>System Pavers Marketing</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 32.99584,
                    lng: -117.081665
                  },
                  content: '<h1>T.B. Penick & Sons</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 36.985486,
                    lng: -119.709695
                  },
                  content: '<h1>Table Mountain Casino</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 36.294939,
                    lng: -119.794356
                  },
                  content: '<h1>Tachi Palace</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 33.535348,
                    lng: -117.717946
                  },
                  content: '<h1>TAE Technologies</h1>' + '<h2>Energy, Utilities & Waste</h2>'
                },
                {
                  coords: {
                    lat: 33.732249,
                    lng: -117.880826
                  },
                  content: '<h1>Tait & Associates</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 37.53324,
                    lng: -122.258746
                  },
                  content: '<h1>Talend</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.937736,
                    lng: -118.055932
                  },
                  content: '<h1>Talley</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 34.171892,
                    lng: -118.604037
                  },
                  content: '<h1>Talon International</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 32.904394,
                    lng: -117.227825
                  },
                  content: '<h1>Tandem Diabetes Care</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.956603,
                    lng: -118.060168
                  },
                  content: '<h1>Tangram Interiors</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 33.856631,
                    lng: -117.850568
                  },
                  content: '<h1>Targus</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.59153,
                    lng: -117.886307
                  },
                  content: '<h1>Tarsadia Hotels</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 34.016417,
                    lng: -118.4477
                  },
                  content: '<h1>TaskUs</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.385791,
                    lng: -121.973104
                  },
                  content: '<h1>Tavant Technologies</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 36.676275,
                    lng: -121.65576
                  },
                  content: '<h1>Taylor Farms</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.14082,
                    lng: -117.282775
                  },
                  content: '<h1>TaylorMade</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.611151,
                    lng: -122.060721
                  },
                  content: '<h1>Taymor Industries</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 32.88188,
                    lng: -117.171652
                  },
                  content: '<h1>Tcp Global</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 32.906636,
                    lng: -117.236842
                  },
                  content: '<h1>Tealium</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.974505,
                    lng: -118.425312
                  },
                  content: '<h1>Team One</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.65076,
                    lng: -117.747612
                  },
                  content: '<h1>Technologent</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 32.905055,
                    lng: -117.175403
                  },
                  content: '<h1>Technology Integration Group</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.904637,
                    lng: -118.385829
                  },
                  content: '<h1>TechStyle Fashion Group</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 34.4317,
                    lng: -119.873374
                  },
                  content: '<h1>Tecolote Research</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.80415,
                    lng: -122.271903
                  },
                  content: '<h1>TEECOM</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 34.849194,
                    lng: -118.874378
                  },
                  content: '<h1>Tejon Ranch</h1>' + '<h2>Real Estate</h2>'
                },
                {
                  coords: {
                    lat: 34.197621,
                    lng: -118.905301
                  },
                  content: '<h1>Teledyne Technologies</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.036584,
                    lng: -118.443571
                  },
                  content: '<h1>Teleflora</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.398719,
                    lng: -121.976692
                  },
                  content: '<h1>Telenav</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 39.250383,
                    lng: -121.014893
                  },
                  content: '<h1>Telestream</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.653131,
                    lng: -117.735515
                  },
                  content: '<h1>Ten-X Commercial</h1>' + '<h2>Real Estate</h2>'
                },
                {
                  coords: {
                    lat: 33.021664,
                    lng: -117.091474
                  },
                  content: '<h1>Teradata</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.570266,
                    lng: -122.271725
                  },
                  content: '<h1>TeraRecon</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.364256,
                    lng: -121.904186
                  },
                  content: '<h1>Terralogic</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.364256,
                    lng: -121.904186
                  },
                  content: '<h1>Terralogic</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.394825,
                    lng: -122.150586
                  },
                  content: '<h1>Tesla</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.369814,
                    lng: -121.919575
                  },
                  content: '<h1>Tessolve</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 36.75156,
                    lng: -119.800612
                  },
                  content: '<h1>TETER</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 34.151075,
                    lng: -118.078547
                  },
                  content: '<h1>Tetra Tech</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 32.895128,
                    lng: -117.139407
                  },
                  content: '<h1>The Argen</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.954815,
                    lng: -117.394751
                  },
                  content: '<h1>The Bank of Hemet</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 34.016201,
                    lng: -118.492654
                  },
                  content: '<h1>The Black Tux</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 34.13695,
                    lng: -118.711263
                  },
                  content: '<h1>The Cheesecake Factory</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.803487,
                    lng: -122.272377
                  },
                  content: '<h1>The Clorox Company</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.062241,
                    lng: -118.352996
                  },
                  content: '<h1>The Coffee Bean & Tea Leaf</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.998295,
                    lng: -118.144929
                  },
                  content: '<h1>The Commerce</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 34.154105,
                    lng: -118.336027
                  },
                  content: '<h1>The CW Network</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 38.302174,
                    lng: -122.288524
                  },
                  content: '<h1>The Doctors Company</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 33.568354,
                    lng: -117.67133
                  },
                  content: '<h1>The Ensign Group</h1>' + '<h2>Healthcare Services</h2>'
                },
                {
                  coords: {
                    lat: 33.829685,
                    lng: -118.07478
                  },
                  content: '<h1>The Gardens Casino</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 34.083411,
                    lng: -118.060725
                  },
                  content: '<h1>The Gill Corporation</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.828099,
                    lng: -122.21038
                  },
                  content: '<h1>The Grubb</h1>' + '<h2>Real Estate</h2>'
                },
                {
                  coords: {
                    lat: 33.803839,
                    lng: -117.906153
                  },
                  content: '<h1>The Habit Burger Grill</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 33.860511,
                    lng: -118.030427
                  },
                  content: '<h1>The Innovation Institute</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.922653,
                    lng: -117.870511
                  },
                  content: '<h1>The Johnny Rockets Group, Inc.</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 33.729237,
                    lng: -117.819708
                  },
                  content: '<h1>The Management Trust</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.969784,
                    lng: -118.360572
                  },
                  content: '<h1>The Marvin Group</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 38.567728,
                    lng: -121.481188
                  },
                  content: '<h1>The McClatchy Company</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 38.245787,
                    lng: -122.273526
                  },
                  content: '<h1>The Meritage Resort and Spa</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 34.028886,
                    lng: -118.37311
                  },
                  content: '<h1>The Mills</h1>' + '<h2>Real Estate</h2>'
                },
                {
                  coords: {
                    lat: 37.377105,
                    lng: -122.014114
                  },
                  content: '<h1>The Myers-Briggs</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 38.606185,
                    lng: -121.465342
                  },
                  content: '<h1>The Niello</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 38.006075,
                    lng: -122.538094
                  },
                  content: '<h1>The Pasha Group</h1>' + '<h2>Transportation</h2>'
                },
                {
                  coords: {
                    lat: 34.08064,
                    lng: -118.049181
                  },
                  content: '<h1>The Precision Coil Spring</h1>' + '<h2>Minerals & Mining</h2>'
                },
                {
                  coords: {
                    lat: 33.917415,
                    lng: -118.394899
                  },
                  content: '<h1>The Proactiv</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 34.029926,
                    lng: -118.464615
                  },
                  content: '<h1>The Recording Academy</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 34.05513,
                    lng: -118.25703
                  },
                  content: '<h1>The Rubicon Project</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 32.721439,
                    lng: -117.157471
                  },
                  content: '<h1>The Sempra Energy</h1>' + '<h2>Energy, Utilities & Waste</h2>'
                },
                {
                  coords: {
                    lat: 35.014256,
                    lng: -118.188027
                  },
                  content: '<h1>The Spaceship</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.04661,
                    lng: -118.26273
                  },
                  content: '<h1>The TCW Group</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 34.011424,
                    lng: -118.468643
                  },
                  content: '<h1>The Tennis Channel</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 34.017997,
                    lng: -118.500154
                  },
                  content: '<h1>The William Warren Group</h1>' + '<h2>Consumer Services</h2>'
                },
                {
                  coords: {
                    lat: 34.036584,
                    lng: -118.443571
                  },
                  content: '<h1>The Wonderful Company</h1>' + '<h2>Holding Companies & Conglomerates</h2>'
                },
                {
                  coords: {
                    lat: 34.124954,
                    lng: -117.709978
                  },
                  content: '<h1>Therapak</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.945186,
                    lng: -121.284615
                  },
                  content: '<h1>Therapeutic Research Center</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.656418,
                    lng: -122.401074
                  },
                  content: '<h1>Theravance Biopharma</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.887491,
                    lng: -117.610186
                  },
                  content: '<h1>Thermal Structures</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.692527,
                    lng: -121.900671
                  },
                  content: '<h1>ThinkHR</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 34.152977,
                    lng: -117.412335
                  },
                  content: '<h1>Thompson Pipe Group</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 37.791034,
                    lng: -122.394768
                  },
                  content: '<h1>ThousandEyes</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.057163,
                    lng: -122.007843
                  },
                  content: '<h1>Threshold Enterprises</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.776751,
                    lng: -122.41625
                  },
                  content: '<h1>Thumbtack</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 38.872059,
                    lng: -121.291686
                  },
                  content: '<h1>Thunder Valley Casino Resort</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.40804,
                    lng: -122.143307
                  },
                  content: '<h1>TIBCO Software</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 34.101367,
                    lng: -118.343791
                  },
                  content: '<h1>Ticketmaster</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 37.387076,
                    lng: -121.966851
                  },
                  content: '<h1>Tiger Analytics</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.395969,
                    lng: -121.978759
                  },
                  content: '<h1>Tintri</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.841977,
                    lng: -122.288116
                  },
                  content: '<h1>Title Nine</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.419438,
                    lng: -121.971075
                  },
                  content: '<h1>TiVo Corporation</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 33.974505,
                    lng: -118.425312
                  },
                  content: '<h1>TMZ</h1>' + '<h2>Telecommunications</h2>'
                },
                {
                  coords: {
                    lat: 33.98159,
                    lng: -118.416224
                  },
                  content: '<h1>TOMS</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.792151,
                    lng: -122.394
                  },
                  content: '<h1>Toniic</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 33.689353,
                    lng: -117.868311
                  },
                  content: '<h1>Too Faced Cosmetics</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 34.152106,
                    lng: -118.650068
                  },
                  content: '<h1>Topa Insurance</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 37.703294,
                    lng: -121.702291
                  },
                  content: '<h1>Topcon Positioning Systems</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.023868,
                    lng: -118.39609
                  },
                  content: '<h1>Topson Downs</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.577899,
                    lng: -122.350906
                  },
                  content: '<h1>TORA</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.872428,
                    lng: -118.228052
                  },
                  content: '<h1>Total Automotive Performance</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.3853,
                    lng: -121.924826
                  },
                  content: '<h1>TowerJazz</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.819788,
                    lng: -118.042985
                  },
                  content: '<h1>Toyo Tire North America</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.051341,
                    lng: -118.256611
                  },
                  content: '<h1>TPx Communications</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.661386,
                    lng: -117.749616
                  },
                  content: '<h1>Trace3</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 34.173272,
                    lng: -117.996022
                  },
                  content: '<h1>Trader Joes</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 34.101373,
                    lng: -118.341032
                  },
                  content: '<h1>Trailer Park</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.770443,
                    lng: -118.276704
                  },
                  content: '<h1>Trapac</h1>' + '<h2>Transportation</h2>'
                },
                {
                  coords: {
                    lat: 33.715557,
                    lng: -118.032664
                  },
                  content: '<h1>TravisMathew</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.354559,
                    lng: -121.883844
                  },
                  content: '<h1>Tredence</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.909843,
                    lng: -118.149767
                  },
                  content: '<h1>Trench Plate Rental</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.805667,
                    lng: -118.066335
                  },
                  content: '<h1>Trend Offset Printing</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 39.772251,
                    lng: -121.876143
                  },
                  content: '<h1>Tri Counties Bank</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 33.687498,
                    lng: -117.833164
                  },
                  content: '<h1>Tri Pointe Group</h1>' + '<h2>Holding Companies & Conglomerates</h2>'
                },
                {
                  coords: {
                    lat: 38.593203,
                    lng: -121.263599
                  },
                  content: '<h1>Tri Tool</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.13053,
                    lng: -117.088309
                  },
                  content: '<h1>TRI-AD</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 37.79046,
                    lng: -122.392105
                  },
                  content: '<h1>Triage Consulting Group</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.387076,
                    lng: -121.966851
                  },
                  content: '<h1>Trianz</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.713534,
                    lng: -117.848148
                  },
                  content: '<h1>Tricon American Homes</h1>' + '<h2>Real Estate</h2>'
                },
                {
                  coords: {
                    lat: 34.048827,
                    lng: -118.260634
                  },
                  content: '<h1>Trifecta</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.38467,
                    lng: -122.00545
                  },
                  content: '<h1>Trimble Navigation</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 38.502814,
                    lng: -122.470446
                  },
                  content: '<h1>Trinchero Family Estates</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.719419,
                    lng: -121.882702
                  },
                  content: '<h1>TriNet Group</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 32.72793,
                    lng: -117.15529
                  },
                  content: '<h1>Tristaff</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.766588,
                    lng: -118.19879
                  },
                  content: '<h1>TRISTAR Insurance Group</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 34.080384,
                    lng: -117.557605
                  },
                  content: '<h1>TRL Systems</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 33.94176,
                    lng: -118.078621
                  },
                  content: '<h1>Trojan Battery</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.05513,
                    lng: -118.25703
                  },
                  content: '<h1>TruConnect Communications</h1>' + '<h2>Telecommunications</h2>'
                },
                {
                  coords: {
                    lat: 33.900678,
                    lng: -118.418746
                  },
                  content: '<h1>True Religion Apparel</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.825033,
                    lng: -122.003414
                  },
                  content: '<h1>Trv</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 38.775999,
                    lng: -121.308897
                  },
                  content: '<h1>TSI Semiconductors</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.397328,
                    lng: -121.927569
                  },
                  content: '<h1>TSMC North America</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.665019,
                    lng: -117.920311
                  },
                  content: '<h1>TTM Technologies</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.394334,
                    lng: -122.078446
                  },
                  content: '<h1>Tubular Labs</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.011627,
                    lng: -117.093395
                  },
                  content: '<h1>Turtle Beach</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.78805,
                    lng: -122.391472
                  },
                  content: '<h1>Twilio</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.928738,
                    lng: -118.059634
                  },
                  content: '<h1>Twin Med</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 38.754103,
                    lng: -122.619014
                  },
                  content: '<h1>Twinpine</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.770666,
                    lng: -122.389661
                  },
                  content: '<h1>Twist Bioscience</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.776751,
                    lng: -122.41625
                  },
                  content: '<h1>Twitter</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 33.757762,
                    lng: -118.087964
                  },
                  content: '<h1>TYR SPORT</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.62739,
                    lng: -122.111861
                  },
                  content: '<h1>Ultra Clean Technology</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 38.073855,
                    lng: -122.532257
                  },
                  content: '<h1>Ultragenyx Pharmaceutical</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.661443,
                    lng: -121.904628
                  },
                  content: '<h1>Unchained Labs</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.511272,
                    lng: -122.001278
                  },
                  content: '<h1>Unigen</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.793304,
                    lng: -122.401459
                  },
                  content: '<h1>Union Bank</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 33.98068,
                    lng: -118.110373
                  },
                  content: '<h1>Unisource Solutions</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.861121,
                    lng: -118.143858
                  },
                  content: '<h1>United Auto Credit</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 36.732733,
                    lng: -119.785726
                  },
                  content: '<h1>United Security Bank</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 34.074421,
                    lng: -118.397878
                  },
                  content: '<h1>United Talent Agency</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.725647,
                    lng: -122.394097
                  },
                  content: '<h1>Unity Technologies</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 34.027671,
                    lng: -118.474088
                  },
                  content: '<h1>Universal Music Group</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 34.138731,
                    lng: -118.355826
                  },
                  content: '<h1>Universal Studios</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.382387,
                    lng: -121.977487
                  },
                  content: '<h1>Upwork</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.819788,
                    lng: -118.042985
                  },
                  content: '<h1>Ushio America</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.584102,
                    lng: -117.723208
                  },
                  content: '<h1>UST Global</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.36793,
                    lng: -121.96643
                  },
                  content: '<h1>V2Solutions</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 34.046895,
                    lng: -118.045329
                  },
                  content: '<h1>VACCO Industries</h1>' + '<h2>Minerals & Mining</h2>'
                },
                {
                  coords: {
                    lat: 34.133503,
                    lng: -118.160873
                  },
                  content: '<h1>Valens</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.662362,
                    lng: -122.392423
                  },
                  content: '<h1>ValGenesis</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.254903,
                    lng: -121.777043
                  },
                  content: '<h1>Valin</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.275528,
                    lng: -118.412207
                  },
                  content: '<h1>Vallarta Supermarkets</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.238632,
                    lng: -117.020458
                  },
                  content: '<h1>Valley View Casino & Hotel</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.391474,
                    lng: -121.931977
                  },
                  content: '<h1>Vangard Concept Offices</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.807385,
                    lng: -118.134773
                  },
                  content: '<h1>Vanguard Logistics Services</h1>' + '<h2>Transportation</h2>'
                },
                {
                  coords: {
                    lat: 38.653599,
                    lng: -121.533492
                  },
                  content: '<h1>Vanir Construction Management</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.372386,
                    lng: -121.973727
                  },
                  content: '<h1>Vantage Data Centers</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.417209,
                    lng: -122.143565
                  },
                  content: '<h1>Varian Medical Systems</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.852541,
                    lng: -118.349003
                  },
                  content: '<h1>VectorUSA</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.690147,
                    lng: -121.895254
                  },
                  content: '<h1>Veeva</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.983948,
                    lng: -118.388307
                  },
                  content: '<h1>Veggie Grill</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 34.148106,
                    lng: -118.796096
                  },
                  content: '<h1>Velocity Commercial Capital</h1>' + '<h2>Real Estate</h2>'
                },
                {
                  coords: {
                    lat: 37.263538,
                    lng: -121.789728
                  },
                  content: '<h1>Velodyne Lidar</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.928005,
                    lng: -117.876411
                  },
                  content: '<h1>Ventura Foods</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.389356,
                    lng: -121.933406
                  },
                  content: '<h1>VeriFone</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 33.685446,
                    lng: -117.855011
                  },
                  content: '<h1>Verify</h1>' + '<h2>Transportation</h2>'
                },
                {
                  coords: {
                    lat: 33.690206,
                    lng: -117.877915
                  },
                  content: '<h1>Veritone</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.417272,
                    lng: -121.978878
                  },
                  content: '<h1>Versa Networks</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.379834,
                    lng: -121.94144
                  },
                  content: '<h1>Vertical Communications</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.555379,
                    lng: -121.976736
                  },
                  content: '<h1>Vertisystem</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 32.894046,
                    lng: -117.234724
                  },
                  content: '<h1>ViaCyte</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.678865,
                    lng: -117.83794
                  },
                  content: '<h1>Viant</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.417272,
                    lng: -121.978878
                  },
                  content: '<h1>Viavi Solutions</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 34.04332,
                    lng: -118.472107
                  },
                  content: '<h1>VideoAmp</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 32.834907,
                    lng: -116.731548
                  },
                  content: '<h1>Viejas Casino Resort  Outlet Center</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 33.999911,
                    lng: -117.677596
                  },
                  content: '<h1>ViewSonic</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.382112,
                    lng: -117.256295
                  },
                  content: '<h1>Village News</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 34.04067,
                    lng: -117.97522
                  },
                  content: '<h1>Villara Building Systems</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 38.463407,
                    lng: -122.718931
                  },
                  content: '<h1>Vintage Wine Estates</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.591959,
                    lng: -122.352565
                  },
                  content: '<h1>Virgin America</h1>' + '<h2>Transportation</h2>'
                },
                {
                  coords: {
                    lat: 33.825107,
                    lng: -118.129769
                  },
                  content: '<h1>Virgin Galactic</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.787135,
                    lng: -122.394497
                  },
                  content: '<h1>Virta Health</h1>' + '<h2>Healthcare Services</h2>'
                },
                {
                  coords: {
                    lat: 33.638217,
                    lng: -117.603872
                  },
                  content: '<h1>Virtium</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.640773,
                    lng: -117.717111
                  },
                  content: '<h1>Virtual Graffiti</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.383068,
                    lng: -121.920195
                  },
                  content: '<h1>Virtual Instruments</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.808898,
                    lng: -117.86706
                  },
                  content: '<h1>Virtual Private LAN Services</h1>' + '<h2>Telecommunications</h2>'
                },
                {
                  coords: {
                    lat: 37.757008,
                    lng: -122.420557
                  },
                  content: '<h1>Visa</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 32.947394,
                    lng: -117.239454
                  },
                  content: '<h1>Visage Imaging</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 38.583944,
                    lng: -121.288312
                  },
                  content: '<h1>Vision Service Plan</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 33.651682,
                    lng: -117.71596
                  },
                  content: '<h1>Vision33</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.85965,
                    lng: -117.894951
                  },
                  content: '<h1>Vista Paint Corporation</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.479372,
                    lng: -122.1778
                  },
                  content: '<h1>Vitria Technology</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.419673,
                    lng: -121.974003
                  },
                  content: '<h1>Vivante</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.401262,
                    lng: -122.143874
                  },
                  content: '<h1>VMware</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.31873,
                    lng: -121.911781
                  },
                  content: '<h1>Vocera</h1>' + '<h2>Telecommunications</h2>'
                },
                {
                  coords: {
                    lat: 33.804497,
                    lng: -117.882374
                  },
                  content: '<h1>Voit Real Estate Services</h1>' + '<h2>Real Estate</h2>'
                },
                {
                  coords: {
                    lat: 33.637189,
                    lng: -117.936249
                  },
                  content: '<h1>Volcom</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 38.585917,
                    lng: -121.415312
                  },
                  content: '<h1>Von Housen Automotive Group</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.667746,
                    lng: -117.763043
                  },
                  content: '<h1>Vortex Industries</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.794343,
                    lng: -122.395929
                  },
                  content: '<h1>VRC</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 34.053128,
                    lng: -118.245081
                  },
                  content: '<h1>VXI Global Solutions</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 38.095179,
                    lng: -122.565078
                  },
                  content: '<h1>W. Bradley Electric</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 37.395874,
                    lng: -121.92855
                  },
                  content: '<h1>Wafer Space</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.544858,
                    lng: -122.2911
                  },
                  content: '<h1>WageWorks</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.789373,
                    lng: -122.399666
                  },
                  content: '<h1>WalkMe</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 34.02289,
                    lng: -118.378108
                  },
                  content: '<h1>Walton Isaacson</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.769031,
                    lng: -121.966771
                  },
                  content: '<h1>WANdisco</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 32.855658,
                    lng: -117.184958
                  },
                  content: '<h1>Ware Malcomb</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 34.147242,
                    lng: -118.788272
                  },
                  content: '<h1>Warehouse Discount Center</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 34.148175,
                    lng: -118.338482
                  },
                  content: '<h1>Warner Bros</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 34.147802,
                    lng: -118.819774
                  },
                  content: '<h1>Warner Pacific</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 33.916847,
                    lng: -118.377397
                  },
                  content: '<h1>WASH Multifamily Laundry Systems</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 34.057997,
                    lng: -118.445973
                  },
                  content: '<h1>Wasserman</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.656038,
                    lng: -117.749063
                  },
                  content: '<h1>WaterHealth International</h1>' + '<h2>Energy, Utilities & Waste</h2>'
                },
                {
                  coords: {
                    lat: 33.143847,
                    lng: -117.236908
                  },
                  content: '<h1>Watkins Wellness</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.413921,
                    lng: -122.085078
                  },
                  content: '<h1>WaveMaker</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.498534,
                    lng: -121.906485
                  },
                  content: '<h1>WaveSplitter Technologies</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 32.839613,
                    lng: -117.126182
                  },
                  content: '<h1>Waxie Sanitary Supply</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.02064,
                    lng: -118.45123
                  },
                  content: '<h1>WCG</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 32.899651,
                    lng: -117.111861
                  },
                  content: '<h1>WD-40</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.777527,
                    lng: -122.391686
                  },
                  content: '<h1>Webcor Builders</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 33.901409,
                    lng: -118.042997
                  },
                  content: '<h1>Weber Logistics</h1>' + '<h2>Agriculture</h2>'
                },
                {
                  coords: {
                    lat: 33.882673,
                    lng: -118.165971
                  },
                  content: '<h1>Weber Metals</h1>' + '<h2>Minerals & Mining</h2>'
                },
                {
                  coords: {
                    lat: 37.354559,
                    lng: -121.883844
                  },
                  content: '<h1>WebEx Communications</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 34.047823,
                    lng: -118.258149
                  },
                  content: '<h1>Wedbush Securities</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 33.888146,
                    lng: -118.375064
                  },
                  content: '<h1>Wedgewood</h1>' + '<h2>Real Estate</h2>'
                },
                {
                  coords: {
                    lat: 37.793359,
                    lng: -122.402686
                  },
                  content: '<h1>Wells Fargo</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 34.139271,
                    lng: -117.274009
                  },
                  content: '<h1>Wesco Aircraft</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.855796,
                    lng: -117.886326
                  },
                  content: '<h1>West Coast Arborists</h1>' + '<h2>Consumer Services</h2>'
                },
                {
                  coords: {
                    lat: 36.910137,
                    lng: -121.782795
                  },
                  content: '<h1>West Marine</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.281463,
                    lng: -121.941214
                  },
                  content: '<h1>West Valley Construction</h1>' + '<h2>Energy, Utilities & Waste</h2>'
                },
                {
                  coords: {
                    lat: 37.963147,
                    lng: -122.488299
                  },
                  content: '<h1>Westamerica Bank</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 34.146247,
                    lng: -118.14227
                  },
                  content: '<h1>Western Asset Management</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 37.247373,
                    lng: -121.794652
                  },
                  content: '<h1>Western Digital</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.686868,
                    lng: -117.864885
                  },
                  content: '<h1>Western National Property Management</h1>' + '<h2>Real Estate</h2>'
                },
                {
                  coords: {
                    lat: 33.80822,
                    lng: -118.036919
                  },
                  content: '<h1>Western Overseas</h1>' + '<h2>Transportation</h2>'
                },
                {
                  coords: {
                    lat: 34.148999,
                    lng: -118.141898
                  },
                  content: '<h1>Westin</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 34.148999,
                    lng: -118.141898
                  },
                  content: '<h1>Westin</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.778008,
                    lng: -122.431272
                  },
                  content: '<h1>White Oak</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 34.104624,
                    lng: -118.149621
                  },
                  content: '<h1>Whittier Trust</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 37.778008,
                    lng: -122.431272
                  },
                  content: '<h1>WideOrbit</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.80631,
                    lng: -117.883255
                  },
                  content: '<h1>Willdan</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.670691,
                    lng: -117.863244
                  },
                  content: '<h1>William Lyon Homes</h1>' + '<h2>Real Estate</h2>'
                },
                {
                  coords: {
                    lat: 37.805799,
                    lng: -122.425075
                  },
                  content: '<h1>Williams-Sonoma</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.78155,
                    lng: -122.261483
                  },
                  content: '<h1>Wind River Systems</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.953554,
                    lng: -118.062111
                  },
                  content: '<h1>Windsor Fashions</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 38.288984,
                    lng: -122.459211
                  },
                  content: '<h1>Wine Communications Group</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 33.9985,
                    lng: -118.13685
                  },
                  content: '<h1>Wine Warehouse</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 38.093109,
                    lng: -122.557637
                  },
                  content: '<h1>Winery Exchange</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.53258,
                    lng: -122.034252
                  },
                  content: '<h1>Wintec Industries</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.387076,
                    lng: -121.966851
                  },
                  content: '<h1>WinWire Technologies</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 32.814405,
                    lng: -117.127148
                  },
                  content: '<h1>WIS International</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.790485,
                    lng: -122.40094
                  },
                  content: '<h1>Wish</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 34.105127,
                    lng: -117.545047
                  },
                  content: '<h1>WLC Architects</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 34.114408,
                    lng: -118.159322
                  },
                  content: '<h1>WNC Insurance Services</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 34.057997,
                    lng: -118.445973
                  },
                  content: '<h1>Wood Smith Henning & Berman</h1>' + '<h2>Law Firms & Legal Services</h2>'
                },
                {
                  coords: {
                    lat: 37.794057,
                    lng: -122.397296
                  },
                  content: '<h1>Woodruff-Sawyer</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 37.455319,
                    lng: -122.182797
                  },
                  content: '<h1>Woodside Hotel Group</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 37.699014,
                    lng: -121.927277
                  },
                  content: '<h1>Workday</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.803487,
                    lng: -122.272377
                  },
                  content: '<h1>Workers Compensation Insurance Rating Bureau of California</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 37.520012,
                    lng: -122.03178
                  },
                  content: '<h1>WORLDPAC</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.269928,
                    lng: -121.791113
                  },
                  content: '<h1>WPG Americas</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.919078,
                    lng: -118.415309
                  },
                  content: '<h1>WPROMOTE</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 37.421403,
                    lng: -122.144862
                  },
                  content: '<h1>WSGR</h1>' + '<h2>Law Firms & Legal Services</h2>'
                },
                {
                  coords: {
                    lat: 37.387409,
                    lng: -122.08254
                  },
                  content: '<h1>WSO2</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.681888,
                    lng: -117.840235
                  },
                  content: '<h1>Wynne Systems</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.330288,
                    lng: -121.887703
                  },
                  content: '<h1>Xactly</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 34.274677,
                    lng: -118.797112
                  },
                  content: '<h1>Xavient</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 33.687498,
                    lng: -117.833164
                  },
                  content: '<h1>Xavor</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 32.93832,
                    lng: -117.23852
                  },
                  content: '<h1>Xifin</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.252648,
                    lng: -121.933984
                  },
                  content: '<h1>Xilinx</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.40698,
                    lng: -121.916033
                  },
                  content: '<h1>XL Construction</h1>' + '<h2>Construction</h2>'
                },
                {
                  coords: {
                    lat: 37.404844,
                    lng: -121.987859
                  },
                  content: '<h1>Xoriant Corporation</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.392848,
                    lng: -121.938194
                  },
                  content: '<h1>Xperi</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.263628,
                    lng: -118.714798
                  },
                  content: '<h1>XYPRO</h1>' + '<h2>Business Services</h2>'
                },
                {
                  coords: {
                    lat: 34.019023,
                    lng: -118.16576
                  },
                  content: '<h1>Yale/Chase Equipment and Services</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.819788,
                    lng: -118.042985
                  },
                  content: '<h1>Yamaha Motor</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 33.819788,
                    lng: -118.042985
                  },
                  content: '<h1>Yamaha Motor</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.908748,
                    lng: -122.066627
                  },
                  content: '<h1>YapStone</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.786612,
                    lng: -122.400006
                  },
                  content: '<h1>Yelp</h1>' + '<h2>Media & Internet</h2>'
                },
                {
                  coords: {
                    lat: 38.2292,
                    lng: -122.595264
                  },
                  content: '<h1>Ygrene</h1>' + '<h2>Finance</h2>'
                },
                {
                  coords: {
                    lat: 37.537721,
                    lng: -122.256237
                  },
                  content: '<h1>Yodlee</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.832402,
                    lng: -118.341001
                  },
                  content: '<h1>Yoshinoya America</h1>' + '<h2>Hospitality</h2>'
                },
                {
                  coords: {
                    lat: 33.717768,
                    lng: -117.805432
                  },
                  content: '<h1>Youngs Market Company</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.717768,
                    lng: -117.805432
                  },
                  content: '<h1>Youngs Market Company</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 33.535348,
                    lng: -117.717946
                  },
                  content: '<h1>Ytel</h1>' + '<h2>Telecommunications</h2>'
                },
                {
                  coords: {
                    lat: 33.733309,
                    lng: -118.292224
                  },
                  content: '<h1>Yusen Terminals</h1>' + '<h2>Transportation</h2>'
                },
                {
                  coords: {
                    lat: 33.906425,
                    lng: -118.31108
                  },
                  content: '<h1>Z Gallerie</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.778008,
                    lng: -122.431272
                  },
                  content: '<h1>ZAP Technology</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 34.05513,
                    lng: -118.25703
                  },
                  content: '<h1>Zemarc</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.781561,
                    lng: -122.410418
                  },
                  content: '<h1>Zendesk</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.791239,
                    lng: -122.396457
                  },
                  content: '<h1>Zenefits</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 34.177149,
                    lng: -118.593933
                  },
                  content: '<h1>Zenith Insurance</h1>' + '<h2>Insurance</h2>'
                },
                {
                  coords: {
                    lat: 38.067498,
                    lng: -122.541941
                  },
                  content: '<h1>Zenni Optical</h1>' + '<h2>Retail</h2>'
                },
                {
                  coords: {
                    lat: 37.792785,
                    lng: -122.404677
                  },
                  content: '<h1>Zignal Labs</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.698048,
                    lng: -121.908
                  },
                  content: '<h1>Zinfi Technologies</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 33.911017,
                    lng: -117.859962
                  },
                  content: '<h1>Zodiac Inflight Innovations</h1>' + '<h2>Telecommunications</h2>'
                },
                {
                  coords: {
                    lat: 33.121741,
                    lng: -117.288417
                  },
                  content: '<h1>Zodiac Pool Systems</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.276328,
                    lng: -121.878365
                  },
                  content: '<h1>Zone24x7</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.568323,
                    lng: -122.273039
                  },
                  content: '<h1>Zoox</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 34.197332,
                    lng: -119.009052
                  },
                  content: '<h1>ZPOWER</h1>' + '<h2>Manufacturing</h2>'
                },
                {
                  coords: {
                    lat: 37.415861,
                    lng: -121.948092
                  },
                  content: '<h1>Zscaler</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.558507,
                    lng: -122.31064
                  },
                  content: '<h1>Zuora</h1>' + '<h2>Software</h2>'
                },
                {
                  coords: {
                    lat: 37.778008,
                    lng: -122.431272
                  },
                  content: '<h1>Zynga</h1>' + '<h2>Retail</h2>'
                },
              ];

        // Loop through markers
        var gmarkers = [];
        for (var i = 0; i < markers.length; i++) {
            gmarkers.push(addMarker(markers[i]));

        }

        //Add MArker function
        function addMarker(props) {
            var marker = new google.maps.Marker({
                position: props.coords,
                map: map,

            });

            /* if(props.iconImage){
              marker.setIcon(props.iconImage);
            } */

            //Check content
            if (props.content) {
                var infoWindow = new google.maps.InfoWindow({
                    content: props.content
                });
                marker.addListener('click', function() {
                    infoWindow.open(map, marker);
                });
            }
            return marker;
        }
        
   
    document.getElementById('zoom-to-area').addEventListener('click', function() {
      zoomToArea();
    });
    
    searchBox.addListener('places_changed', function() {
      searchBoxPlaces(this);
    });
    document.getElementById('go-places').addEventListener('click', textSearchPlaces);
 
  function makeMarkerIcon(markerColor) {
    var markerImage = new google.maps.MarkerImage('http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
      '|40|_|%E2%80%A2',
      new google.maps.Size(21, 34),
      new google.maps.Point(0, 0),
      new google.maps.Point(10, 34),
      new google.maps.Size(21,34));
    return markerImage;
  }
  
  function zoomToArea() {
    var geocoder = new google.maps.Geocoder();
    var address = document.getElementById('zoom-to-area-text').value;
    if (address == '') {
      window.alert('You must enter an area, or address.');
    } else {
      geocoder.geocode(
        { address: address,
          componentRestrictions: {locality: 'California'}
        }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            map.setZoom(12);
          } else {
            window.alert('We could not find that location - try entering a more' +
                ' specific place.');
          }
        });
      }
    }
  
  function searchBoxPlaces(searchBox) {
    hideMarkers(placeMarkers);
    var places = searchBox.getPlaces();
    if (places.length == 0) {
      window.alert('We did not find any places matching that search.');
    } else {
      createMarkersForPlaces(places);
    }
  }
  function textSearchPlaces() {
    var bounds = map.getBounds();
    hideMarkers(placeMarkers);
    var placesService = new google.maps.places.PlacesService(map);
    placesService.textSearch({
      query: document.getElementById('places-search').value,
      bounds: bounds
    }, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        createMarkersForPlaces(results);
      }
    });
  }
  function hideMarkers(markers) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  }
  function createMarkersForPlaces(places) {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < places.length; i++) {
      var place = places[i];
      var icon = {
        url: place.icon,
        size: new google.maps.Size(35, 35),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(15, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      var marker = new google.maps.Marker({
        map: map,
        icon: {
          url: "https://raw.githubusercontent.com/brittanyyee/territories/master/onix%20sales%20map/venuepin.png"
        },
        title: place.name,
        position: place.geometry.location,
        id: place.place_id
      });
      var placeInfoWindow = new google.maps.InfoWindow();
      marker.addListener('click', function() {
        if (placeInfoWindow.marker == this) {
          console.log("This infowindow already is on this marker!");
        } else {
          getPlacesDetails(this, placeInfoWindow);
        }
      });
      placeMarkers.push(marker);
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    }
    map.fitBounds(bounds);
  }
function getPlacesDetails(marker, infowindow) {
  var service = new google.maps.places.PlacesService(map);
  service.getDetails({
    placeId: marker.id
  }, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      infowindow.marker = marker;
      var innerHTML = '<div>';
      if (place.name) {
        innerHTML += '<strong>' + place.name + '</strong>';
      }
      if (place.formatted_address) {
        innerHTML += '<br>' + place.formatted_address;
      }
      if (place.formatted_phone_number) {
        innerHTML += '<br>' + place.formatted_phone_number;
      }
      if (place.opening_hours) {
        innerHTML += '<br><br><strong>Hours:</strong><br>' +
            place.opening_hours.weekday_text[0] + '<br>' +
            place.opening_hours.weekday_text[1] + '<br>' +
            place.opening_hours.weekday_text[2] + '<br>' +
            place.opening_hours.weekday_text[3] + '<br>' +
            place.opening_hours.weekday_text[4] + '<br>' +
            place.opening_hours.weekday_text[5] + '<br>' +
            place.opening_hours.weekday_text[6];
      }
      if (place.photos) {
        innerHTML += '<br><br><img src="' + place.photos[0].getUrl(
            {maxHeight: 100, maxWidth: 200}) + '">';
      }
      innerHTML += '</div>';
      infowindow.setContent(innerHTML);
      infowindow.open(map, marker);
      infowindow.addListener('closeclick', function() {
        infowindow.marker = null;
      });
    }
  });
}
}
google.maps.event.addDomListener(window, 'load', initMap)