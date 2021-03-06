var map;
      var markers = [];
      var polygon = null;
      var placeMarkers = [];
      function initMap() {
        var styles = [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#444444"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              color: "#f2f2f2"
            }
          ]
        },
        {
          featureType: "landscape.natural.terrain",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#d64b4b"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
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
          stylers: [
            {
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
          stylers: [
            {
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
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [
            {
              visibility: "simplified"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#21373f"
            },
            {
              visibility: "on"
            }
          ]
        }
      ];
map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 32.7707, lng: -96.7970},
          zoom: 13,
          styles: styles,
          gestureHandling: 'greedy',
          mapTypeControl: false
        });
        
        var timeAutocomplete = new google.maps.places.Autocomplete(
            document.getElementById('search-within-time-text'));
        var zoomAutocomplete = new google.maps.places.Autocomplete(
            document.getElementById('zoom-to-area-text'));
        zoomAutocomplete.bindTo('bounds', map);

        var searchBox = new google.maps.places.SearchBox(
            document.getElementById('places-search'));
        // Bias the searchbox to within the bounds of the map.
        searchBox.setBounds(map.getBounds());
        
        var locations = [
{title: '2020 Companies', location: {lat: 32.729442, lng: -97.33181}},
{title: '7-Eleven', location: {lat: 32.923768, lng: -96.989551}},
{title: 'A. H. Belo', location: {lat: 32.775007, lng: -96.806285}},
{title: 'Ace Cash Express', location: {lat: 32.890205, lng: -96.968201}},
{title: 'Addus', location: {lat: 33.104872, lng: -96.803555}},
{title: 'Aethon Energy Management', location: {lat: 32.915587, lng: -96.77415}},
{title: 'Alan Ritchey', location: {lat: 33.493664, lng: -97.158903}},
{title: 'Altair Global Services', location: {lat: 33.080973, lng: -96.82359}},
{title: 'American Airlines', location: {lat: 32.826247, lng: -97.050692}},
{title: 'Anderson Merchandisers', location: {lat: 33.090128, lng: -96.81918}},
{title: 'Andrews Distributing', location: {lat: 32.804502, lng: -96.843804}},
{title: 'Animal Supply', location: {lat: 32.86036, lng: -96.930077}},
{title: 'Approach Resources', location: {lat: 32.735744, lng: -97.429308}},
{title: 'Arcis Golf', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Arcosa', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Ashford Hospitality Trust', location: {lat: 32.991075, lng: -96.828993}},
{title: 'At Home', location: {lat: 33.005682, lng: -96.689718}},
{title: 'AT&T', location: {lat: 32.779574, lng: -96.798831}},
{title: 'ATCO Rubber Products', location: {lat: 32.791662, lng: -97.22611}},
{title: 'Atmos Energy', location: {lat: 32.7801861, lng: -96.8034924}},
{title: 'Austin Industries', location: {lat: 32.801432, lng: -96.801334}},
{title: 'Aviall', location: {lat: 32.736212, lng: -96.784359}},
{title: 'AZZ', location: {lat: 32.7514386, lng: -97.34815329999}},
{title: 'Baker Triangle', location: {lat: 32.784643, lng: -96.622535}},
{title: 'Balfour Beatty Construction', location: {lat: 32.7979068, lng: -96.810903099}},
{title: 'Bar Louie', location: {lat: 32.951596, lng: -96.834686}},
{title: 'Beal Bank', location: {lat: 33.076129, lng: -96.826666}},
{title: 'Beauty Systems Group', location: {lat: 33.184514, lng: -97.09961}},
{title: 'Bell Flight', location: {lat: 32.729442, lng: -97.33181}},
{title: 'Ben E. Keith', location: {lat: 32.755362, lng: -97.324983}},
{title: 'Benefit Harbor', location: {lat: 33.078698, lng: -96.807629}},
{title: 'BenefitMall', location: {lat: 32.917299, lng: -96.775235}},
{title: 'Berkshire Hathaway Automotive', location: {lat: 32.919746, lng: -96.996036}},
{title: 'BioWorld', location: {lat: 32.865843, lng: -96.96226}},
{title: 'BNSF Logistics', location: {lat: 32.995472, lng: -97.053242}},
{title: 'BNSF Railway', location: {lat: 32.729442, lng: -97.33181}},
{title: 'Borden Dairy', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Brandt Engineering', location: {lat: 32.939455, lng: -96.928428}},
{title: 'Briggs Equipment', location: {lat: 32.868242, lng: -96.894727}},
{title: 'Brinker International', location: {lat: 32.965977, lng: -97.004066}},
{title: 'Brinks Home Security', location: {lat: 32.736212, lng: -96.784359}},
{title: 'BSN Sports', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Builders FirstSource', location: {lat: 32.7854, lng: -96.796337}},
{title: 'C-III Capital Partners', location: {lat: 32.870658, lng: -96.937483}},
{title: 'Caliber Collision Centers', location: {lat: 33.114261, lng: -96.805161}},
{title: 'Capital Senior Living', location: {lat: 32.941462, lng: -96.820841}},
{title: 'Capital Title of Texas, LLC.', location: {lat: 33.032091, lng: -96.827351}},
{title: 'Capstead Mortgage', location: {lat: 32.864464, lng: -96.77226}},
{title: 'CareerStaff Unlimited', location: {lat: 32.895111, lng: -96.976115}},
{title: 'Cash Store', location: {lat: 32.885232, lng: -96.974569}},
{title: 'Celanese', location: {lat: 32.871489, lng: -96.944021}},
{title: 'CHC Helicopter', location: {lat: 32.86036, lng: -96.930077}},
{title: 'Cheddars', location: {lat: 32.87438, lng: -96.94663}},
{title: 'Chuck E Cheese Entertainment', location: {lat: 32.920653, lng: -96.969926}},
{title: 'Cinemark Holdings', location: {lat: 33.074982, lng: -96.824033}},
{title: 'Civitas Senior', location: {lat: 32.72526, lng: -97.469904}},
{title: 'ClubCorp USA', location: {lat: 32.9112, lng: -96.87613}},
{title: 'Colonial Savings', location: {lat: 32.7373, lng: -97.355888}},
{title: 'Comerica Bank', location: {lat: 32.781616, lng: -96.796534}},
{title: 'Commercial Metals', location: {lat: 32.898061, lng: -96.960381}},
{title: 'Comstock Resources', location: {lat: 33.144537, lng: -96.822688}},
{title: 'Consolidated Restaurant Operations', location: {lat: 32.772696, lng: -96.809957}},
{title: 'Copart', location: {lat: 32.991075, lng: -96.828993}},
{title: 'Corner Bakery Cafe', location: {lat: 32.921408, lng: -96.774426}},
{title: 'Corsicana Mattress', location: {lat: 32.819927, lng: -96.863874}},
{title: 'CROSSMARK', location: {lat: 33.069753, lng: -96.80032}},
{title: 'CyrusOne', location: {lat: 32.794131, lng: -96.806531}},
{title: 'D-BAT Academies', location: {lat: 32.965554, lng: -96.841036}},
{title: 'D.R. Horton', location: {lat: 32.685678, lng: -97.102867}},
{title: 'Darling Ingredients', location: {lat: 32.866804, lng: -96.949273}},
{title: 'Daseke', location: {lat: 32.96001, lng: -96.822459}},
{title: 'Dave & Busters', location: {lat: 32.874509, lng: -96.894204}},
{title: 'Dean Foods', location: {lat: 32.805437, lng: -96.792131}},
{title: 'Del Friscos Restaurant Group', location: {lat: 32.924651, lng: -96.985174}},
{title: 'Denbury Resources', location: {lat: 33.074339, lng: -96.806932}},
{title: 'DentalOne Partners', location: {lat: 33.074957, lng: -96.823439}},
{title: 'Diodes', location: {lat: 33.083558, lng: -96.799617}},
{title: 'Dr Pepper Snapple Group', location: {lat: 33.077421, lng: -96.805243}},
{title: 'Driveline Retail Merchandising', location: {lat: 32.952342, lng: -97.009603}},
{title: 'Eagle Materials', location: {lat: 32.864191, lng: -96.809502}},
{title: 'Earthbound Trading', location: {lat: 32.983572, lng: -97.023479}},
{title: 'ECi Software Solutions', location: {lat: 32.977728, lng: -97.263509}},
{title: 'Elbit Systems of America', location: {lat: 32.829703, lng: -97.383744}},
{title: 'Elemetal', location: {lat: 32.964292, lng: -96.819978}},
{title: 'Elevate', location: {lat: 32.680138, lng: -97.416086}},
{title: 'Empire Petroleum Partners', location: {lat: 32.863993, lng: -96.768605}},
{title: 'Empire Roofing', location: {lat: 32.679592, lng: -97.242707}},
{title: 'Encore Wire', location: {lat: 33.184174, lng: -96.604614}},
{title: 'Energy Transfer', location: {lat: 32.861418, lng: -96.807413}},
{title: 'Enlink Midstream', location: {lat: 32.792073, lng: -96.795177}},
{title: 'Entercoms', location: {lat: 32.871205, lng: -96.938976}},
{title: 'Envoy', location: {lat: 32.927204, lng: -97.003618}},
{title: 'Epsilon', location: {lat: 32.89554, lng: -96.967996}},
{title: 'Essilor of America', location: {lat: 32.797186, lng: -96.817268}},
{title: 'ETAN Industries', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Evolv Health', location: {lat: 32.939899, lng: -96.794747}},
{title: 'Examination Management Services', location: {lat: 32.917745, lng: -96.986375}},
{title: 'Exela', location: {lat: 32.833154, lng: -96.905179}},
{title: 'Exeter Finance', location: {lat: 32.87403, lng: -96.94358}},
{title: 'ExxonMobil', location: {lat: 32.890213, lng: -96.949767}},
{title: 'Farmer Brothers', location: {lat: 33.085403, lng: -97.245316}},
{title: 'Federal Home Loan Bank of Dallas', location: {lat: 32.799748, lng: -96.949152}},
{title: 'FFE Transportation', location: {lat: 32.592492, lng: -96.787761}},
{title: 'Fiesta Restaurant Group', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Firebird Restaurant Group', location: {lat: 32.788715, lng: -96.803849}},
{title: 'First American Payment Systems', location: {lat: 32.755994, lng: -97.334802}},
{title: 'FirstCash', location: {lat: 32.744697, lng: -97.339692}},
{title: 'Flowserve Corporation', location: {lat: 32.871205, lng: -96.938976}},
{title: 'Fluor', location: {lat: 32.903308, lng: -96.949713}},
{title: 'Fogo de Chão', location: {lat: 33.087564, lng: -96.807862}},
{title: 'Forke+Shindler Group', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Forterra', location: {lat: 32.853225, lng: -96.925124}},
{title: 'Fossil', location: {lat: 32.939148, lng: -96.744171}},
{title: 'Foxworth-Galbraith Lumber', location: {lat: 33.023754, lng: -96.793537}},
{title: 'Freeman', location: {lat: 32.834352, lng: -96.868692}},
{title: 'Freese', location: {lat: 32.681462, lng: -97.391876}},
{title: 'Frito-Lay North America', location: {lat: 33.078701, lng: -96.834626}},
{title: 'FTS International', location: {lat: 32.72526, lng: -97.469904}},
{title: 'Fujitsu Network Communications', location: {lat: 32.98968, lng: -96.658946}},
{title: 'G2 Secure Staff', location: {lat: 32.862035, lng: -96.935172}},
{title: 'G6 Hospitality', location: {lat: 32.974883, lng: -96.90434}},
{title: 'Gainsco', location: {lat: 32.809474, lng: -96.805407}},
{title: 'GameStop', location: {lat: 32.902736, lng: -97.087511}},
{title: 'General Datatech', location: {lat: 32.817765, lng: -96.878127}},
{title: 'GM Financial', location: {lat: 32.745754, lng: -97.343009}},
{title: 'Goodman Networks', location: {lat: 33.144537, lng: -96.822688}},
{title: 'GSC Enterprises', location: {lat: 33.134579, lng: -95.607104}},
{title: 'Haggar Clothing', location: {lat: 32.909876, lng: -96.926091}},
{title: 'Hallmark Financial Services', location: {lat: 32.72526, lng: -97.469904}},
{title: 'Harvard Risk Management', location: {lat: 32.939501, lng: -96.81793}},
{title: 'Hatfield and Company', location: {lat: 32.908508, lng: -96.424314}},
{title: 'Healthcare Highways', location: {lat: 33.083374, lng: -96.859666}},
{title: 'HealthMarkets', location: {lat: 32.862082, lng: -97.213987}},
{title: 'HealthSmart', location: {lat: 32.860125, lng: -96.978893}},
{title: 'Hensley Industries', location: {lat: 32.890193, lng: -96.907405}},
{title: 'Hill & Wilkinson', location: {lat: 32.986518, lng: -96.661766}},
{title: 'Hilltop Holdings', location: {lat: 32.785681, lng: -96.810606}},
{title: 'Hilltop Securities', location: {lat: 32.781249, lng: -96.801984}},
{title: 'HistoryMaker Homes', location: {lat: 32.935758, lng: -97.066064}},
{title: 'HMS', location: {lat: 32.892676, lng: -96.971555}},
{title: 'HollyFrontier', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Howard Hughes Corporation', location: {lat: 32.930338, lng: -96.787496}},
{title: 'Huitt-Zollars', location: {lat: 32.788599, lng: -96.804874}},
{title: 'Hunt Consolidated', location: {lat: 32.787481, lng: -96.802435}},
{title: 'Independent Financial', location: {lat: 33.161913, lng: -96.683661}},
{title: 'Inform Diagnostics', location: {lat: 32.899797, lng: -96.960083}},
{title: 'Interstate Batteries', location: {lat: 32.923053, lng: -96.770812}},
{title: 'Invitation Homes', location: {lat: 32.781616, lng: -96.796534}},
{title: 'Irving Convention Center', location: {lat: 32.878068, lng: -96.943452}},
{title: 'J. Hilburn', location: {lat: 32.921408, lng: -96.774426}},
{title: 'Jacobs Engineering', location: {lat: 32.784834, lng: -96.797218}},
{title: 'JCPenney', location: {lat: 33.081621, lng: -96.832185}},
{title: 'Kimberly-Clark Corporation', location: {lat: 32.869924, lng: -96.950251}},
{title: 'KRONOS Worldwide, Inc.', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Kubota USA', location: {lat: 32.979671, lng: -97.028678}},
{title: 'Lanyon', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Learfield Communications', location: {lat: 33.032091, lng: -96.827351}},
{title: 'Lennox International', location: {lat: 32.982244, lng: -96.760573}},
{title: 'Lonestar Resources Us', location: {lat: 32.758249, lng: -97.365806}},
{title: 'Lonestar Truck Group', location: {lat: 32.888472, lng: -97.097502}},
{title: 'M1 Services', location: {lat: 33.216828, lng: -97.133391}},
{title: 'Madix', location: {lat: 32.722767, lng: -96.274275}},
{title: 'Marketplace Chaplains', location: {lat: 33.008243, lng: -96.732535}},
{title: 'Mary Kay', location: {lat: 32.971418, lng: -96.822376}},
{title: 'Matador Resources Company', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Match.com', location: {lat: 32.866625, lng: -96.768342}},
{title: 'Maverick Capital', location: {lat: 32.736212, lng: -96.784359}},
{title: 'McKesson', location: {lat: 32.880649, lng: -96.990119}},
{title: 'MediaKind', location: {lat: 33.148237, lng: -96.839124}},
{title: 'Medieval Times', location: {lat: 32.896237, lng: -96.976124}},
{title: 'Michaels Stores', location: {lat: 32.915092, lng: -96.988337}},
{title: 'Mimis Cafe', location: {lat: 32.913954, lng: -96.773806}},
{title: 'Mission Foods', location: {lat: 32.888497, lng: -96.966279}},
{title: 'MJB Wood Group', location: {lat: 32.965977, lng: -97.004066}},
{title: 'MoneyGram International', location: {lat: 32.794499, lng: -96.808041}},
{title: 'Mongolian Concepts', location: {lat: 32.917745, lng: -96.986375}},
{title: 'Moroch Partners', location: {lat: 32.808962, lng: -96.806563}},
{title: 'Motorsport Aftermarket Group', location: {lat: 32.981292, lng: -97.014062}},
{title: 'Mr. Cooper', location: {lat: 32.965977, lng: -97.004066}},
{title: 'MV Transportation', location: {lat: 32.805437, lng: -96.792131}},
{title: 'NCH', location: {lat: 32.842363, lng: -96.923688}},
{title: 'NEC Corporation of America', location: {lat: 32.87438, lng: -96.94663}},
{title: 'Neiman Marcus', location: {lat: 32.780772, lng: -96.797477}},
{title: 'Neovia Logistics', location: {lat: 32.896237, lng: -96.976124}},
{title: 'Nexstar Media Group', location: {lat: 32.853225, lng: -96.925124}},
{title: 'Omni Hotels & Resorts', location: {lat: 32.805446, lng: -96.816609}},
{title: 'Omnitracs', location: {lat: 32.785576, lng: -96.798219}},
{title: 'On The Border Mexican Grill & Cantina', location: {lat: 32.902175, lng: -96.979018}},
{title: 'Oncor Electric Delivery', location: {lat: 32.786677, lng: -96.803409}},
{title: 'Onyx CenterSource', location: {lat: 32.923612, lng: -96.770953}},
{title: 'Osburn Contractors', location: {lat: 32.889844, lng: -96.68503}},
{title: 'Pacific Northern, Inc.', location: {lat: 32.98163, lng: -96.846366}},
{title: 'Paragon Healthcare', location: {lat: 32.986429, lng: -96.80426}},
{title: 'Pariveda Solutions', location: {lat: 32.799262, lng: -96.801401}},
{title: 'Pavestone', location: {lat: 32.903714, lng: -97.092851}},
{title: 'PDX, Inc and National Health Information Network, Inc', location: {lat: 32.759424, lng: -97.479114}},
{title: 'Pegasus Logistics Group', location: {lat: 32.945152, lng: -96.999757}},
{title: 'Petmate', location: {lat: 32.747307, lng: -97.06789}},
{title: 'PFSW', location: {lat: 33.094071, lng: -96.676325}},
{title: 'PHP Agency', location: {lat: 32.97843, lng: -96.837608}},
{title: 'Pier 1 Imports', location: {lat: 32.754002, lng: -97.344171}},
{title: 'Pilot Thomas Logistics', location: {lat: 32.729442, lng: -97.33181}},
{title: 'Pinnacle', location: {lat: 32.969243, lng: -96.823749}},
{title: 'Pioneer Natural Resources', location: {lat: 32.870716, lng: -96.940272}},
{title: 'Pogue Construction', location: {lat: 33.223366, lng: -96.622997}},
{title: 'Polk', location: {lat: 32.728809, lng: -97.041365}},
{title: 'Pollo Campero', location: {lat: 32.917299, lng: -96.775235}},
{title: 'Poly-America', location: {lat: 32.722945, lng: -97.037651}},
{title: 'Presidium Group', location: {lat: 32.798242, lng: -96.811294}},
{title: 'Prestige Maintenance USA', location: {lat: 33.01262, lng: -96.690106}},
{title: 'Prime Lending', location: {lat: 32.999968, lng: -96.797998}},
{title: 'PrimeSource Building Products', location: {lat: 32.890081, lng: -96.970481}},
{title: 'Primoris Services', location: {lat: 32.791231, lng: -96.807796}},
{title: 'Primus Global Services', location: {lat: 32.89005, lng: -96.976214}},
{title: 'profrac.com', location: {lat: 32.759205, lng: -97.647414}},
{title: 'ProPath Services', location: {lat: 32.818885, lng: -96.859634}},
{title: 'Quest Resource Holding', location: {lat: 33.053427, lng: -96.865234}},
{title: 'Quorum Hotels & Resorts', location: {lat: 32.736212, lng: -96.784359}},
{title: 'RadioShack', location: {lat: 32.815759, lng: -97.343947}},
{title: 'Range Resources', location: {lat: 32.729442, lng: -97.33181}},
{title: 'RealPage', location: {lat: 32.979912, lng: -96.711982}},
{title: 'Remington Hotels', location: {lat: 32.991075, lng: -96.828993}},
{title: 'Rent-A-Center', location: {lat: 33.085691, lng: -96.814004}},
{title: 'RSR', location: {lat: 32.772696, lng: -96.809957}},
{title: 'Rumbleon', location: {lat: 32.935974, lng: -96.995138}},
{title: 'Ryan', location: {lat: 32.939501, lng: -96.81793}},
{title: 'RYZE Claim Solutions', location: {lat: 32.988825, lng: -96.829496}},
{title: 'Sabre Holdings', location: {lat: 32.98222, lng: -97.160209}},
{title: 'Sabre Industries', location: {lat: 32.408879, lng: -97.211742}},
{title: 'Safe Harbor Marinas', location: {lat: 32.949438, lng: -96.80497}},
{title: 'Sally Beauty Holdings', location: {lat: 33.184514, lng: -97.09961}},
{title: 'Santander Consumer USA Inc.', location: {lat: 32.782058, lng: -96.798168}},
{title: 'Schwob Building', location: {lat: 32.890136, lng: -96.899658}},
{title: 'Shermco', location: {lat: 32.819446, lng: -96.910431}},
{title: 'Six Flags', location: {lat: 32.676959, lng: -97.023474}},
{title: 'SLK Group', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Snelling', location: {lat: 32.92309, lng: -96.750281}},
{title: 'Soleo Health', location: {lat: 32.752403, lng: -97.359227}},
{title: 'Solera Inc.', location: {lat: 32.985654, lng: -97.203208}},
{title: 'Southwest Airlines', location: {lat: 32.845938, lng: -96.849378}},
{title: 'Southwest Credit Systems', location: {lat: 32.974883, lng: -96.90434}},
{title: 'SRS Distribution', location: {lat: 33.145885, lng: -96.680893}},
{title: 'StackPath', location: {lat: 32.791345, lng: -96.804192}},
{title: 'Stevens Transport', location: {lat: 32.770621, lng: -96.654911}},
{title: 'Studio Movie Grill', location: {lat: 32.917299, lng: -96.775235}},
{title: 'Sunoco LP', location: {lat: 32.861418, lng: -96.807413}},
{title: 'Supreme Lending', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Taco Bueno Restaurants', location: {lat: 32.736212, lng: -96.784359}},
{title: 'TBK Bank', location: {lat: 32.921408, lng: -96.774426}},
{title: 'TDIndustries', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Tellabs', location: {lat: 32.736212, lng: -96.784359}},
{title: 'Tenet Health', location: {lat: 32.784845, lng: -96.802593}},
{title: 'Texas Capital Bank', location: {lat: 32.790429, lng: -96.802627}},
{title: 'TEXAS DIGESTIVE DISEASE CONSULTANTS', location: {lat: 32.911611, lng: -97.290566}},
{title: 'Texas Instruments', location: {lat: 32.912361, lng: -96.753629}},
{title: 'Texas Western Hospitality', location: {lat: 32.959967, lng: -96.826135}},
{title: 'The Active Network', location: {lat: 32.785576, lng: -96.798219}},
{title: 'The C.D. Hartnett', location: {lat: 32.81816, lng: -97.343966}},
{title: 'The CMI Group', location: {lat: 33.047269, lng: -96.757092}},
{title: 'The Container Store', location: {lat: 32.960677, lng: -97.010416}},
{title: 'The Exchange', location: {lat: 32.695793, lng: -96.897027}},
{title: 'Thryv', location: {lat: 32.736212, lng: -96.784359}},
{title: 'TIER REIT', location: {lat: 32.861981, lng: -96.811081}},
{title: 'Title Resource Group', location: {lat: 32.925952, lng: -96.766312}},
{title: 'Torchmark', location: {lat: 33.170914, lng: -96.729166}},
{title: 'TPG Public Equity Partners', location: {lat: 32.756051, lng: -97.330653}},
{title: 'Transplace', location: {lat: 33.104872, lng: -96.803555}},
{title: 'Trinity Industries', location: {lat: 32.805645, lng: -96.84144}},
{title: 'Trinity Valley Electric Cooperative', location: {lat: 32.600224, lng: -96.29083}},
{title: 'Triumph Bancorp', location: {lat: 32.921408, lng: -96.774426}},
{title: 'Triumph Business Capital', location: {lat: 32.981292, lng: -97.014062}},
{title: 'Truman Arnold Companies', location: {lat: 32.794188, lng: -96.804104}},
{title: 'Tuesday Morning', location: {lat: 32.924289, lng: -96.797905}},
{title: 'Twin Peaks Restaurants', location: {lat: 32.959578, lng: -96.82999}},
{title: 'Tyler Technologies', location: {lat: 33.066472, lng: -96.801511}},
{title: 'U.S. Concrete', location: {lat: 32.841534, lng: -97.084041}},
{title: 'U.S. Dermatology Partners', location: {lat: 33.028849, lng: -96.867908}},
{title: 'Union Standard Insurance', location: {lat: 32.87403, lng: -96.94358}},
{title: 'United Cooperative Services', location: {lat: 32.53319, lng: -97.33381}},
{title: 'Vehicle Acceptance Corporation', location: {lat: 32.7797239, lng: -96.8042551}},
{title: 'Veritex Community Bank', location: {lat: 32.862872, lng: -96.805988}},
{title: 'Vertex', location: {lat: 32.967701, lng: -96.717007}},
{title: 'Virbac', location: {lat: 32.824441, lng: -97.315533}},
{title: 'Vistra Energy', location: {lat: 32.898322, lng: -96.964297}},
{title: 'Westmount Realty Capital', location: {lat: 32.787115, lng: -96.795436}},
{title: 'Williams', location: {lat: 32.862035, lng: -96.935172}},
{title: 'Worldlink US', location: {lat: 33.110451, lng: -96.815288}},
{title: 'WorldWide Express', location: {lat: 32.785681, lng: -96.810606}},
{title: 'Xome Inc.', location: {lat: 33.038881, lng: -96.991821}},
{title: 'Zoes Kitchen', location: {lat: 33.047269, lng: -96.757092}}
        ];
        var largeInfowindow = new google.maps.InfoWindow();
        var drawingManager = new google.maps.drawing.DrawingManager({
          drawingMode: google.maps.drawing.OverlayType.POLYGON,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT,
            drawingModes: [
              google.maps.drawing.OverlayType.POLYGON
            ]
          }
        });
        var defaultIcon = makeMarkerIcon('77afad');
        var highlightedIcon = makeMarkerIcon('FFFF24');
        for (var i = 0; i < locations.length; i++) {
          var position = locations[i].location;
          var title = locations[i].title;
          var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            icon: {
            url: "https://raw.githubusercontent.com/brittanyyee/territories/master/onix%20sales%20map/mapicon.png"},
            id: i
          });
          markers.push(marker);
          marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
          });
        }
        document.getElementById('show-listings').addEventListener('click', showListings);
        document.getElementById('hide-listings').addEventListener('click', function() {
          hideMarkers(markers);
        });
        document.getElementById('toggle-drawing').addEventListener('click', function() {
          toggleDrawing(drawingManager);
        });
        document.getElementById('zoom-to-area').addEventListener('click', function() {
          zoomToArea();
        });
        
        searchBox.addListener('places_changed', function() {
          searchBoxPlaces(this);
        });
        document.getElementById('go-places').addEventListener('click', textSearchPlaces);
        drawingManager.addListener('overlaycomplete', function(event) {
          if (polygon) {
            polygon.setMap(null);
            hideMarkers(markers);
          }
          drawingManager.setDrawingMode(null);
          polygon = event.overlay;
          polygon.setEditable(true);
          searchWithinPolygon(polygon);
          
          polygon.getPath().addListener('set_at', searchWithinPolygon);
          polygon.getPath().addListener('insert_at', searchWithinPolygon);
        });
      }
      
      function populateInfoWindow(marker, infowindow) {
        if (infowindow.marker != marker) {
          
          infowindow.setContent('');
          infowindow.marker = marker;
          
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
          var streetViewService = new google.maps.StreetViewService();
          var radius = 50;
          function getStreetView(data, status) {
            if (status == google.maps.StreetViewStatus.OK) {
              var nearStreetViewLocation = data.location.latLng;
              var heading = google.maps.geometry.spherical.computeHeading(
                nearStreetViewLocation, marker.position);
                infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
                var panoramaOptions = {
                  position: nearStreetViewLocation,
                  pov: {
                    heading: heading,
                    pitch: 30
                  }
                };
              var panorama = new google.maps.StreetViewPanorama(
                document.getElementById('pano'), panoramaOptions);
            } else {
              infowindow.setContent('<div>' + marker.title + '</div>' +
                '<div>No Street View Found</div>');
            }
          }
          streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
          infowindow.open(map, marker);
        }
      }
      function showListings() {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
          bounds.extend(markers[i].position);
        }
        map.fitBounds(bounds);
      }
      function hideMarkers(markers) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
      }
      function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage('http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new google.maps.Size(21, 34),
          new google.maps.Point(0, 0),
          new google.maps.Point(10, 34),
          new google.maps.Size(21,34));
        return markerImage;
      }
      function toggleDrawing(drawingManager) {
        if (drawingManager.map) {
          drawingManager.setMap(null);
          if (polygon !== null) {
            polygon.setMap(null);
          }
        } else {
          drawingManager.setMap(map);
        }
      }
      function searchWithinPolygon() {
        for (var i = 0; i < markers.length; i++) {
          if (google.maps.geometry.poly.containsLocation(markers[i].position, polygon)) {
            markers[i].setMap(map);
          } else {
            markers[i].setMap(null);
          }
        }
      }
      function zoomToArea() {
        var geocoder = new google.maps.Geocoder();
        var address = document.getElementById('zoom-to-area-text').value;
        if (address == '') {
          window.alert('You must enter an area, or address.');
        } else {
          geocoder.geocode(
            { address: address,
              componentRestrictions: {locality: 'Texas'}
            }, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                map.setZoom(15);
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