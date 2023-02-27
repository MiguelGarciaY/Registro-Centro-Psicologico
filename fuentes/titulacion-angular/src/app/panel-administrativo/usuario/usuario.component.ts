import { Component, Input, OnInit, OnDestroy, ViewChild, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuario } from 'src/app/modelos/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { DataTableDirective } from 'angular-datatables/src/angular-datatables.directive';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  //dtOptions: DataTables.Settings = {};
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data: any;
  @Input() listaAlumnos!: Usuario;
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  showTable: boolean = false;
  constructor(private http: HttpClient) { }

  isCheckedActivo:boolean;

  ngOnInit(): void {

    this.dtOptions = {
      tableId:"tableId",
      scrollY: "530px",
      //myChkValue: this.isChk,
      //scrollX: "1200px",
      autoWidth: true,
      pageLength: 25,
      order: [[1, 'asc']],
      language: {
        "emptyTable": "No hay información disponible",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
        "infoEmpty": "",
        "infoFiltered": "(filtrado de _MAX_ entradas totales)",
        "lengthMenu": "_MENU_ Entradas",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar registro",
        "zeroRecords": "Sin resultados",
        "paginate": {
          "first": "Primera",
          "last": "Última",
          "next": "Siguiente",
          "previous": "Anterior"
        },
        "aria": {
          "sortAscending": ": ordenar ascendentemente",
          "sortDescending": ": ordenar descendientemente"
        }
      },
      searching: true,
      dom: "<'d-flex align-items-center justify-content-between'f><rt><'d-flex align-items-center justify-content-between'lip>",
      // Use this attribute to enable the responsive extension
      responsive: true,
      
    };
    
    const token = localStorage.getItem("access_token");
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`)

    this.http.get('api/usuario/listar', { headers })
      .subscribe((rpst: any) => {
        console.log(rpst)

        this.data = rpst;
        this.dtTrigger.next(rpst.dtOptions);
        this.showTable = true;
      });
  }

  isChk: boolean = false;
  prueba(event){
    const checkboxValue = $(this).is(':checked');
    const rowIndex = event.target.parentNode.parentNode.rowIndex;
    console.log(`Posición de la fila: ${checkboxValue}`);
    //console.log(this.isChk)
  }

  ngAfterViewInit(): void {
    const that = this;
  
    $(document).ready(function () {
      const table = $('#tableId').DataTable();
  
      // Get the value of the checkboxes when they are clicked
      $('body').on('click', '.checkbox-column', function () {
        const checkboxValue = $(this).is(':checked');
        const rowIndex = table.row($(this).parents('tr')).index();
  
        console.log(`Checkbox value: ${checkboxValue}`);
        console.log(`Row index: ${rowIndex}`);
      });
    });
  }  

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  onResize() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns.adjust();
    });
  }

}
