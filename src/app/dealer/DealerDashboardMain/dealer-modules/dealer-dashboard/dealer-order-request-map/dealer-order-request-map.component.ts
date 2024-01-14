import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-dealer-order-request-map',
  templateUrl: './dealer-order-request-map.component.html',
  styleUrls: ['./dealer-order-request-map.component.scss']
})
export class DealerOrderRequestMapComponent implements OnInit {

  public center: google.maps.LatLngLiteral = { lat: 18.0005, lng: 78.15036 };
  zoom = 8;
  circleCenter: google.maps.LatLngLiteral = {
    lat: 18.0005, lng: 78.15036
  };
  radius = 50000;
  icon1: google.maps.Icon = {
    url: '../../../../../assets/img/service/map/record (1).png',

  }
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    position: this.center,
  };
  mapText = '1';
  markers: google.maps.MarkerOptions[] = [
    { position: { lat: 17.38005, lng: 78.45836 }, label: '', clickable: true, icon: this.icon1 },
    { position: { lat: 18.38005, lng: 77.45036 }, label: '', clickable: true, icon: this.icon1 },
    { position: { lat: 18.38805, lng: 78.45836 }, label: '', clickable: true, icon: this.icon1 },
    { position: { lat: 17.38805, lng: 77.45036 }, label: '', clickable: true, icon: this.icon1 },
  ];
  mapinfoWindows = [
    { name: "ameerpet", count: "10", city: "hyderabad", distance: "2.5", },
    { name: "charminar", count: "10", city: "hyderabad", distance: "2.5" },
    { name: "cybertowers", count: "10", city: "hyderabad", distance: "2.5" },
    { name: "metrostation", count: "10", city: "hyderabad", distance: "2.5" },
  ]


  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  name: any; count: any; city: any; distance: any;
  openInfo(marker: MapMarker, i: number) {
    this.city = this.mapinfoWindows.at(i)?.city;
    this.name = this.mapinfoWindows.at(i)?.name;
    this.count = this.mapinfoWindows.at(i)?.count;
    this.distance = this.mapinfoWindows.at(i)?.distance;
    this.infoWindow.open(marker);
  }
  UIoptions: google.maps.MapOptions = {

    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
