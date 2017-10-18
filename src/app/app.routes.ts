import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {HackathonListagemComponent} from './hackathon-listagem/hackathon-listagem.component';
import {HackathonSingleComponent} from './hackathon-single/hackathon-single.component';
import {ShoppingListagemComponent} from './shopping-listagem/shopping-listagem.component';
import {ShoppingSingleComponent} from './shopping-single/shopping-single.component';
import {BlogListagemComponent} from './blog-listagem/blog-listagem.component';
import {BlogSingleComponent} from './blog-single/blog-single.component';
import {LoginComponent} from './login/login.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {PerfilComponent} from './perfil/perfil.component';
import {PerfilCompanyComponent} from './perfil-company/perfil-company.component';
import {ContatoComponent} from './contato/contato.component';

export const ROUTES: Routes = [
  {path:'', component: HomeComponent},
  {path:'hackathons', component: HackathonListagemComponent},
  {path:'hackathons/hackathon-da-fiap-em-parceria-com-a-everis-brasil', component: HackathonSingleComponent},
  {path:'shopping', component: ShoppingListagemComponent},
  {path:'shopping/internet-das-coisas-para-todos', component: ShoppingSingleComponent},
  {path:'blog', component: BlogListagemComponent},
  {path:'blog/o-que-e-hackathon', component: BlogSingleComponent},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'user', component: PerfilComponent},
  {path:'company', component: PerfilCompanyComponent},
  {path:'contato', component: ContatoComponent}
]
