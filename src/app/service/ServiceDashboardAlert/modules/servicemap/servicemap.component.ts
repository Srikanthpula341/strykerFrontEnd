import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-servicemap',
  templateUrl: './servicemap.component.html',
  styleUrls: ['./servicemap.component.scss']
})
export class ServicemapComponent implements OnInit {

  apiLoaded!: Observable<boolean>;
  center: google.maps.LatLngLiteral = { lat: 18.0005, lng: 78.15036 };
  zoom = 8;
  circleCenter: google.maps.LatLngLiteral = {
    lat: 18.0005, lng: 78.15036
  };
  radius = 50000;
  icon1: google.maps.Icon = {
    url: './../../../../assets/img/service/map/record (1).png',
    // size:5px
  }
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    position: this.center,
    //  icon: this.icon1


  };
  mapText = '1';

  markers: google.maps.MarkerOptions[] = [

    { position: { lat: 17.38005, lng: 78.45836 }, label: '', clickable: true, icon: this.icon1, title: this.getText() },
    { position: { lat: 18.38005, lng: 77.45036 }, label: '', clickable: true, icon: this.icon1,  },
    { position: { lat: 18.38805, lng: 78.45836 }, label: '', clickable: true, icon: this.icon1 },
    { position: { lat: 17.38805, lng: 77.45036 }, label: '', clickable: true, icon: this.icon1 },
  ];

  mapinfoWindows = [
    { name: "ameerpet", count: "10", city: "hyderabad", distance: "2.5", },
    { name: "charminar", count: "10", city: "hyderabad", distance: "2.5" },
    { name: "cybertowers", count: "10", city: "hyderabad", distance: "2.5" },
    { name: "metrostation", count: "10", city: "hyderabad", distance: "2.5" },
  ]
  dataset = [];

  getText() {
    this.mapText = this.mapText + " sdfghjkjhg"+'/n'+"sdfg" +this.icon1;

    return this.mapText;
  }



  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  name: any; count: any; city: any; distance: any;
  openInfo(marker: MapMarker, i: number) {
    this.city = this.mapinfoWindows.at(i)?.city;
    this.name = this.mapinfoWindows.at(i)?.name;
    this.count = this.mapinfoWindows.at(i)?.count;
    this.distance = this.mapinfoWindows.at(i)?.distance;
    this.infoWindow.open(marker);

  }
  constructor() { }
  addMarkerInfo() {


    // for (let i = 0; i < this.markers.length; i++) {
    //   const contentString = "dfg" + i + "fg";
    //   const Marker = new google.maps.Marker({
    //     position: this.markers.at(i)?.position,
    //     label: this.markers.at(i)?.label,
    //   })
    // }
  }

  ngOnInit(): void {

    this.mapText = this.mapText + "dfgh";
    this.addMarkerInfo();


   // console.log(this.markers);
   // console.log(this.markers.at(0)?.position);
    this.markers.forEach(p => {
      // this.dataset.push(p);
    });
   // console.log(this.dataset);

  }

}

