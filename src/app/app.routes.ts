import { Routes } from '@angular/router';
import { InicioComponent } from '../components/inicio/inicio.component';
import { ContextoComponent } from '../components/fase-plan/contexto/contexto.component';
import { ActivosComponent } from '../components/fase-plan/activos/activos.component';
import { AmenazasVulnerabilidadesComponent } from '../components/fase-plan/amenazas-vulnerabilidades/amenazas-vulnerabilidades.component';
import { EvaluacionRiesgosComponent } from '../components/fase-plan/evaluacion-riesgos/evaluacion-riesgos.component';
import { BrechasComponent } from '../components/fase-plan/brechas/brechas.component';
import { ModeloGestionComponent } from '../components/fase-plan/modelo-gestion/modelo-gestion.component';
import { DiagramasComponent } from '../components/fase-do/diagramas/diagramas.component';
import { ControlRespuestaComponent } from '../components/fase-do/control-respuesta/control-respuesta.component';
import { PoliticasComponent } from '../components/fase-do/politicas/politicas.component';
import { ImplementacionComponent } from '../components/fase-do/implementacion/implementacion.component';
import { TecnologiaComponent } from '../components/fase-do/tecnologia/tecnologia.component';
import { HerramientasComponent } from '../components/fase-do/herramientas/herramientas.component';
import { IaComponent } from '../components/fase-do/ia/ia.component';
import { CumplimientoComponent } from '../components/fase-check/cumplimiento/cumplimiento.component';
import { IndicadoresComponent } from '../components/fase-check/indicadores/indicadores.component';
import { ImpactoComponent } from '../components/fase-check/impacto/impacto.component';
import { ValidacionComponent } from '../components/fase-check/validacion/validacion.component';
import { ActualizacionComponent } from '../components/fase-act/actualizacion/actualizacion.component';
import { RecomendacionesComponent } from '../components/fase-act/recomendaciones/recomendaciones.component';
import { RetroalimentacionComponent } from '../components/fase-act/retroalimentacion/retroalimentacion.component';
import { IntegracionesComponent } from '../components/fase-act/integraciones/integraciones.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { TestComponent } from '../test.component';


export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'test', component: TestComponent },
  // Fase PLAN
  { path: 'fase-plan/contexto', component: ContextoComponent },
  { path: 'fase-plan/activos', component: ActivosComponent },
  { path: 'fase-plan/amenazas-vulnerabilidades', component: AmenazasVulnerabilidadesComponent },
  { path: 'fase-plan/evaluacion-riesgos', component: EvaluacionRiesgosComponent },
  { path: 'fase-plan/brechas', component: BrechasComponent },
  { path: 'fase-plan/modelo-gestion', component: ModeloGestionComponent },

  // Fase DO
  { path: 'fase-do/diagramas', component: DiagramasComponent },
  { path: 'fase-do/control-respuesta', component: ControlRespuestaComponent },
  { path: 'fase-do/politicas', component: PoliticasComponent },
  { path: 'fase-do/implementacion', component: ImplementacionComponent },
  { path: 'fase-do/tecnologia', component: TecnologiaComponent },
  { path: 'fase-do/herramientas', component: HerramientasComponent },
  { path: 'fase-do/ia', component: IaComponent },

  // Fase CHECK
  { path: 'fase-check/cumplimiento', component: CumplimientoComponent },
  { path: 'fase-check/indicadores', component: IndicadoresComponent },
  { path: 'fase-check/impacto', component: ImpactoComponent },
  { path: 'fase-check/validacion', component: ValidacionComponent },

  // Fase ACT
  { path: 'fase-act/actualizacion', component: ActualizacionComponent },
  { path: 'fase-act/recomendaciones', component: RecomendacionesComponent },
  { path: 'fase-act/retroalimentacion', component: RetroalimentacionComponent },
  { path: 'fase-act/integraciones', component: IntegracionesComponent },

  // Contacto
  { path: 'contacto', component: ContactoComponent }
];
