import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpService } from '../../servizi/http.service ';
import { DataService } from '../../servizi/data.service';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-aggiungi-video',
  templateUrl: './aggiungi-video.component.html',
  styleUrl: './aggiungi-video.component.css',
})
export class AggiungiVideoComponent {
  videoform: FormGroup;
  dataSource: any;
  titoloCanale$!: Observable<string>;
  channelTitle: string = '';
  videoTitle: any;
  constructor(
    private servizio: HttpService,
    private data: DataService,
    private formBuilder: FormBuilder
  ) {
    this.videoform = new FormGroup({
      link: new FormControl ('Tuo Link',[Validators.required,this.matchingPrefixValidator('https://www.youtube.com/watch')]),  // Assicurati che 'link' sia definito correttamente come controllo nel FormGroup
      // Altri controlli del FormGroup...
    });
  }

  stringa!: string;
  stringaReplace: string = this.stringa;
  message: any;

  dataToSend: any;
  formSubmitted: boolean = false;

  questoLink = {
    urlVideo: '',
  };
  OnSubmit(form: any) {
    // console.log(this.questoLink);
    // this.mandaDati();
    
  

    const link = this.videoform.get('link')?.value;

    forkJoin([
      this.servizio.getVideoTitle(this.servizio.estraiID(link)),
      this.servizio.getChannelNameFromVideoId(this.servizio.estraiID(link))
    ]).subscribe(([videoData, channelTitle]: [any, string]) => {
      this.videoTitle = videoData.items[0].snippet.title;
      this.channelTitle = channelTitle;
      this.data.setChannelTitle(channelTitle);
    
      const videoYt: any = {
        urlVideo: this.embeddaVideo(link),
        nomeCanale: this.channelTitle,
        titoloVideo: this.videoTitle
      };
    
      this.mandaDati(videoYt);
    });
   
    


    

      this.formSubmitted  = true

      this.data.setChannelTitle(this.videoTitle)
  }

  mandaDati(value: any) {
    this.servizio.setUrl(value).subscribe((risposta) => {
      console.log('dati inviati', risposta); // Gestisci i dati ricevuti dall'API
    });
  }

  setNomeCanale(value: any) {
    this.servizio.setNomeCanale(value).subscribe((risposta) => {
      console.log('dati inviati', risposta);
    });
  }

  mostraDati() {
    this.servizio.getUrl().subscribe((dati: any) => {
      console.log(dati);
      this.dataSource = Object.keys(dati).map((key) => {
        return dati[key];
      });
      console.log(this.dataSource);
      this.dataSource = dati; // Gestisci i dati ricevuti dall'API
    });
  }

  ngOnInit(): void {
    console.log('NOME CANALE', this.data.getData());

    console.log(this.videoform.value.link);
    console.log('mimmomimmomimmo')
   
  }

  ngAfterViewInit() {}

  changeMessage(value: string) {
    this.data.setChannelTitle(value);
  }

  //embed al posto di watch
  embeddaVideo(value: string) {
    value = value.replace(value.substring(23, 32), '/embed/');
    let i: any;
    for (i = 0; i < value.length; i++) {
      if (value.charAt(i) == '&') {
        value = value.slice(0, value.indexOf('&'));
        return value;
      }
    }
    return value;
  }

  matchingPrefixValidator(prefix: string) {
    return (control:any) => {
      const value: string = control.value || '';
      const isValid = value.toLowerCase().startsWith(prefix.toLowerCase());
  
      return isValid ? null : { matchingPrefix: { valid: false } };
    };
  }

isInputFieldValid() {
    const Link = this.videoform.get('link');
  return Link ? Link.valid : false;

}

  // Metodo per ottenere l'errore specifico se presente
  inputFieldError() {
    const Link = this.videoform.get('link');
    return Link!.hasError('required') ? 'Inserire Il campo  richiesto' :
           Link!.hasError('matchingPrefix') ? 'Il campo deve iniziare con (https://www.youtube.com)' 
           : 'Altro messaggio di errore';
  }

}