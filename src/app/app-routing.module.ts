import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FormsDemoComponent } from './forms-demo/forms-demo.component'
import { TableBeforeComponent } from './table-before/table-before.component'
import { TableDemoComponent } from './table-demo/table-demo.component'


const routes: Routes = [
	{
		path: 'forms',
		pathMatch: 'full',
		component: FormsDemoComponent,
	},
	{
		path: 'tables',
		pathMatch: 'full',
		component: TableDemoComponent
	},
	{
		path: 'tablebefore',
		pathMatch: 'full',
		component: TableBeforeComponent
	},
	{
		path: '**',
		component: FormsDemoComponent,
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			relativeLinkResolution: 'legacy',
			onSameUrlNavigation: 'reload',
			// enableTracing: true,
		}),
	],
	exports: [RouterModule],
	providers: [],
})
export class AppRoutingModule {}
