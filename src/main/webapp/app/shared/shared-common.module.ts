import { NgModule } from '@angular/core';

import { GmbmanagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GmbmanagerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GmbmanagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GmbmanagerSharedCommonModule {}
