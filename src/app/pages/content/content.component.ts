import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../components/data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string=''
  contentTitle:string='Mais Notícias do Angular'
  contentDescription:string=''
  private id:string | null='0'

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
      )

      this.setValuesToComponents(this.id)
  }

  setValuesToComponents(id:string | null){
    const result = dataFake.filter(
      article => article.Id == id
      )[0]


      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover

  }

}
