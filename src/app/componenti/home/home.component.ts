import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../../servizi/http.service ';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { DataService } from '../../servizi/data.service';
import { ActivatedRoute, Route, Router, RouterOutlet } from '@angular/router';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HomeComponent   {
  fotoform!: FormGroup;
  dati: any;
  channelTitle$!: Observable<string>;
  nomecanale: string = '';
  private dataSubscription!: Subscription;
  message!: string;
  messaggio: String = ' mimmo;';
  nomecanalev: any;
  linksBackend = [{ urlVideo: '', nomeCanale: '', titoloVideo:'' }];
  linksBackendUnici = [{urlVideo :'', nomeCanale :'',titoloVideo:''}]

  mimmo: any = this.linksBackend[0].nomeCanale;

  datasource: any;
  tiles: any;
i: any;
Array: any;
new: any;
nomeCanale: any;
videoTitle: any;
nomeCanaleFromRoute: String = ''


  constructor(
    private servizio: HttpService,
    public sanitizer: DomSanitizer,
    private data: DataService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.linksBackendUnici = this.removeDuplicatesByProperty(this.linksBackend, 'nomeCanale');
    console.log('links backend unici',this.linksBackendUnici)
  }

  mostraDati() {
    this.servizio.getUrl().subscribe((dati: any) => {
      console.log(dati);
      this.datasource = Object.keys(dati).map((key) => {
        return dati[key];
      });
      console.log(this.datasource);
    });
  }

  ngOnInit() {
    this.caricaDatiBackend();
    // this.data.currentMessage.subscribe(dati =>{
    // // this.message = dati;
    // // console.log(this.message)
    // // const oggettoStringa : any  = {link : this.sanitizer.bypassSecurityTrustResourceUrl(this.message)}
    // // console.log(this.Links)
    // // console.log(oggettoStringa)
    // // this.Links.push(oggettoStringa)

    // })
    this.data.titoloCanale$.subscribe((channelTitle: string) => {
      this.channelTitle$ = this.data.titoloCanale$;
      console.log(this.channelTitle$);
      
    });

    console.log('links backend', this.linksBackend)
    console.log('titolo video',this.data.getData())
    console.log(this.linksBackendUnici)

    this.route.params.subscribe(params => {
      this.nomeCanaleFromRoute = params['nomeCanale'];
    });

  
    
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  

  changeMessage() {
    this.data.setChannelTitle('MIMMO');
  }

  caricaDatiBackend() {
    this.servizio.getUrl().subscribe((dati: any) => {
      console.log('dati ricevuti', dati);
      this.linksBackend = Object.keys(dati).map((key) => {
        console.log('dati mappati', dati);
        return dati[key];

      });
     this.linksBackendUnici=this.removeDuplicatesByProperty(this.linksBackend,'nomeCanale')
      console.log('LinksBackend', this.linksBackend);
      console.log('LinksBackendUnici', this.linksBackendUnici);
    });
  }

  removeDuplicatesByProperty(array: any[], property: string): any[] {
    const uniqueArray = array.filter((obj, index, self) =>
      index === self.findIndex((el) => el[property] === obj[property])
    );
    console.log('Array originale:', array);
    console.log('Array unico:', uniqueArray);
    return uniqueArray;
  }
  
  onClick(index:number){
    this.router.navigate(['/sotto-componente', this.linksBackendUnici[index].nomeCanale]);
    
  }

  

  
  

  
}
