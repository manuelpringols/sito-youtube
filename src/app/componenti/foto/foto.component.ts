import { Component } from '@angular/core';
import { HttpService } from '../../servizi/http.service ';
import { animate, style, transition, trigger } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { VideoService } from '../../servizi/video.service';

@Component({
  selector: 'app-foto',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})
export class FotoComponent {
  dataSource:any
  constructor(private servizio:HttpService, private video:VideoService){}  
link=['https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mario_Trevi_2010.jpg/320px-Mario_Trevi_2010.jpg',
'https://images2-wpc.corriereobjects.it/kWb1cAHGEWyDqm98jXkANxcCOtM=/fit-in/1200x800/style.corriere.it/assets/uploads/2021/06/rino-gaetano-1200.jpg',
'https://www.corriere.it/methode_image/2021/11/11/Spettacoli/Foto%20Spettacoli/Mario-Merola-Instagram-cf-cropped-70-17-1038-783.jpg'
]

prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
  cani = [
    {nome:'mario',cognome:'trevi',src : this.link[0]},
    {nome:'rino',cognome:'gaetano',src : this.link[1]},
    {nome:'mario',cognome:'merola',src : this.link[2]},
    {nome:'mario',cognome:'merola',src : this.link},
    {nome:'mario',cognome:'merola',src : this.link}
  ]

  ngOnInit(){
    console.log("Mimmo")
    console.log(this.video.salvaVideo("https://www.youtube.com/watch?v=CCYCUHiJl-8","nomevideo.mp4").subscribe((value:any)=>{
      console.log(value)
    }))

   }
   
  

  mostraDati(){
    this.dataSource=this.servizio.getUrl().subscribe((dati:any) =>{
      console.log(dati)
      this.dataSource=Object.keys(dati).map((key)=>{return dati[key]
        console.log(dati)
      })
      
     })
  }

  embeddaVideo(value:string){
    value=  value.replace(value.substring(23,30),"/embed/")
   
     return value;
   }
}
