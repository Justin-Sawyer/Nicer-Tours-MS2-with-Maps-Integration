// First thing Monday: copy all code to MY .js file
// 2nd thing: Change all "link" objects
// 3rd thing: Look at adding new maps for each section instead of having overlapping infowindows
// Then you can look at the div element
let markers = [];
let locations = [];
let openMarkers = [];
let infowindow = null;
let map;


let oldTownMarkers = locations.slice(0, 6);
let castleHillMarkers = locations.slice(6, 9);
let portMarkers = locations.slice(9, 12);
let cimiezMarkers = locations.slice(12, 16);

//---------------------------------------------------------------------------------------------------- Initialize Map
function initMap() {

    map = new google.maps.Map(document.getElementById("map-canvas"), {
        //zoom: 13,
        center: { lat: 43.70313, lng: 7.26608 },
        mapTypeControl: false,
        streetViewControl: false
    });

    //---------------------------------------------------------------------------------------------------- Markers
    //Promenade des Anglais marker
    let markerProm = {
        lat: 43.695316, 
        lng: 7.267793,
        title: `Promenade des Anglais`,
        link: `<a type="button" href="../tour-of-nice.html#prom">Find Out More</a>`,
        text: `The Promenade was`
    }

    //Place Masséna marker
    let markerPlaceMassena = {
        lat: 43.697400,
        lng: 7.270230,
        title: "Place Masséna",
        link: `<a type="button" href="../tour-of-nice.html#placeMassena">Find Out More</a>`,
        text: `The Promenade was`
    }

    //Opera House marker
    let markerOperaHouse = {
        lat: 43.69547,
        lng: 7.27253,
        title: "L'Opéra de Nice Opera House",
        link: `<a type="button" href="../tour-of-nice.html#operaHouse">Find Out More</a>`,
        text: `The Promenade was`
    }

    //Flower Market marker
    let markerFlowerMarket = {
        lat: 43.69572,
        lng: 7.27528,
        title: "The Flower Market of the Old Town",
        link: `<a type="button" href="../tour-of-nice.html#flowerMarket">Find Out More</a>`,
        text: `The Promenade was`
    }

    //St Reparate Church marker
    let markerStReparateChurch = {
        lat: 43.697294,
        lng: 7.275965,
        title: "St. Réparate Church",
        link: `<a type="button" href="../tour-of-nice.html#stReparateChurch">Find Out More</a>`,
        text: `The Promenade was`
    }

    //Castle Hill View Point marker
    let markerCastleHillViewPoint = {
        lat: 43.694891,
        lng: 7.279880,
        title: "Castle Hill View Point",
        link: `<a type="button" href="../tour-of-nice.html#castleHillViewPoint">Find Out More</a>`,
        text: `The Promenade was`
    }

    //Castle Hill marker
    let markerCastleHill = {
        lat: 43.695096,
        lng: 7.280560,
        title: "Castle Hill",
        link: `<a type="button" href="../tour-of-nice.html#castleHill">Find Out More</a>`,
        text: `The Promenade was`
    }

    //Rauba-Capeù Memorial marker
    let markerRaubaCapeu = {
        lat: 43.693849,
        lng: 7.281250,
        title: "WWI Memorial 'Rauba-Capeù'",
        link: `<a type="button" href="../tour-of-nice.html#raubaCapeu">Find Out More</a>`,
        text: `The Promenade was`
    }

    //Nice Port marker
    let markerPortLympia = {
        lat: 43.695379, 
        lng: 7.284777,
        title: "Port de Nice Lympia",
        link: `<a type="button" href="../tour-of-nice.html#portLympia">Find Out More</a>`,
        text: `The Promenade was`
    }

   //Nice View Point marker
    let markerBayOfAngelsView = {
        lat: 43.690772,
        lng: 7.294768,
        title: "View over Nice and the Bay of Angels",
        link: `<a type="button" href="../tour-of-nice.html#bayOfAngelsView">Find Out More</a>`,
        text: `The Promenade was`
    }

    //Arènes de Cimiez marker
    let markerArenesDeCimiez = {
        lat: 43.720492,
        lng: 7.276909,
        title: "Arènes de Cimiez Garden",
        link: `<a type="button" href="../tour-of-nice.html#arenesDeCimiez">Find Out More</a>`,
        text: `The Promenade was`
    }

    //Matisse Museum marker
    let markerMatisseMuseum = {
        lat: 43.71938,
        lng: 7.27624,
        title: "Matisse Museum",
        link: `<a type="button" class="move" onclick="openElement()" href="../tour-of-nice.html#matisse">Find Out More</a>`,
        /*openElement: function () {
            document.getElementById(".output").append("#matisse")
        },*/
        text: `The Promenade was`
    }

    //Archaeology Museum marker
    let markerArchaeologyMuseum = {
        lat: 43.71928,
        lng: 7.27511,
        title: "Archaeology Museum",
        link: `<a type="button" href="../tour-of-nice.html#archaeology">Find Out More</a>`,
        text: `The Promenade was`
    }

    //Cimiez Monastery marker
    let markerCimiezMonastery = {
        lat: 43.71998,
        lng: 7.27881,
        title: "The Monastery of Cimiez",
        link: `<a type="button" href="../tour-of-nice.html#cimiezMonastery">Find Out More</a>`,
        text: `The Promenade was`
    }

    //Notre Dame marker
    let markerNotreDame = {
        lat: 43.703672,
        lng: 7.265758,
        title: "Notre-Dame de l’Assomption Basilica",
        link: `<a type="button" href="../tour-of-nice.html#notreDame">Find Out More</a>`,
        text: `The Promenade was`
    }

    //Russian Cathedral marker
    let markerRussianCathedral = {
        lat: 43.703810,
        lng: 7.253920,
        title: "St. Nicholas Russian Orthodox Cathedral",
        link: `St. Nicholas Russian Orthodox Cathedral<br><br><a type="button" onclick="openElement()" href="../tour-of-nice.html#russianCathedral">Find Out More</a>`,
        text: `The Promenade was`
    }

    //---------------------------------------------------------------------------------------------------- Markers
    locations =
        [
            markerProm,
            markerPlaceMassena,
            markerOperaHouse,
            markerFlowerMarket,
            markerStReparateChurch,
            markerCastleHillViewPoint,
            markerCastleHill,
            markerRaubaCapeu,
            markerPortLympia,
            markerBayOfAngelsView,
            markerArenesDeCimiez,
            markerMatisseMuseum,
            markerArchaeologyMuseum,
            markerCimiezMonastery,
            markerNotreDame,
            markerRussianCathedral
        ];

    for (let i = 0; i < locations.length; i++) {
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
            map: map
        });
        let infowindow = new google.maps.InfoWindow({
            content: locations[i].link,
            maxWidth: 160
        });
        infowindow.open(map, marker);
    }


    // infowindow = new google.maps.InfoWindow();

    markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location
        });
    });

    // markers = locations.map(function (location, i) {
    //     let marker = new google.maps.Marker({
    //         position: location
    //     });

    //     //opens one infowindow at a time on click of that marker
    //     google.maps.event.addListener(marker, "click", function (evt) {
    //         markers.forEach(function (infoWindow) {
    //             infowindow.setContent(`${location.title}<br><br>${location.link}`);
    //             infowindow.open(map, marker);
    //         })
    //     })
    //     infowindow.setContent(`${location.title}<br><br>${location.link}`);
    //     infowindow.open(map, marker);
    //     return marker;
    // });


    //---------------------------------------------------------------------------------------------------- Marker Clustering
    /*let markerCluster = new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });*/

}

//---------------------------------------------------------------------------------------------------- jQuery
//-------------------------------------------------- Hide map on page load
$("#map-container").hide();

//-------------------------------------------------- Show map on description buttons
$(".btn-global-description").on("click", function () {
    $("#map-container").show();
})

//-------------------------------------------------- Section (Buttons) Zooms
//Old Town Zoom
$(".btn-old-town").on("click", function () {
    $(".global-info").css("display", "none");
    $("#old-town").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(17);
        map.setCenter({ lat: 43.695961, lng: 7.271446 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.695961, lng: 7.271446 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.695961, lng: 7.271446 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.696391, lng: 7.271155 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(15);
        map.setCenter({ lat: 43.696391, lng: 7.271155 });
    }
})

//Castle Hill Zoom
$(".btn-castle-hill").on("click", function () {
    $(".global-info").css("display", "none");
    $("#castle-hill").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(18);
        map.setCenter({ lat: 43.694306, lng: 7.281073 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.694306, lng: 7.281073 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.694321, lng: 7.281030 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.694321, lng: 7.281030 })
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(16);
        map.setCenter({ lat: 43.694321, lng: 7.281030 })
    }
})

//Port Lympia Zoom
$(".btn-the-port").on("click", function () {
    $(".global-info").css("display", "none");
    $("#the-port").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(16);
        map.setCenter({ lat: 43.693313, lng: 7.290793 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.694063, lng: 7.290414 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.694499, lng: 7.290804 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.693256, lng: 7.290468 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(15);
        map.setCenter({ lat: 43.694901, lng: 7.290403 });
    }
})

//Cimiez zoom
$(".btn-cimiez").on("click", function () {
    $(".global-info").css("display", "none");
    $("#cimiez").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(18);
        map.setCenter({ lat: 43.719948, lng: 7.276502 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.720333, lng: 7.277311 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.720230, lng: 7.276968 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.720093, lng: 7.276860 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(16);
        map.setCenter({ lat: 43.720371, lng: 7.276448 });
    }
})

//Russian Church Zoom
$(".btn-russian-cathedral").on("click", function () {
    $(".global-info").css("display", "none");
    $("#russian-cathedral").css("display", "block");
    $(".poi-close-all").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(16);
        map.setCenter({ lat: 43.704697, lng: 7.259707 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.704697, lng: 7.259707 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.704697, lng: 7.259707 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.704697, lng: 7.259707 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(15);
        map.setCenter({ lat: 43.704697, lng: 7.259707 });
    }
})


//-------------------------------------------------- Buttons
// Close Info Box
$(".poi-close").on("click", function () {
    $(this).parents(".attraction").hide();
})

// Close all Info boxes and reset map zoom
$(".poi-close-all").on("click", function () {
    $(".attraction").hide();
    $(".global-info").css("display", "none")
    map.setZoom(13);
    map.setCenter({ lat: 43.70313, lng: 7.26608 }),
        $("#map-container").get(0).scrollIntoView();
})
// Back To Map
$(".back-to-map").on("click", function () {
    $("#map-container").get(0).scrollIntoView();
})

function showOldTownInfoWindows() {
    for (var i = 0; i < oldTownMarkers.length; i++) {
        google.maps.event.trigger(oldTownMarkers[i], "click");
    }
}


function openElement() {
    document.getElementById(".output").append("#matisse")
}
