
import { hsgHowovpAfterModule } from './modules/alma-howovp-after/hsg-howovp-after.module';
import { hsgExceptionHandlerModule } from './modules/hsg-exception-handler/hsg-exception-handler.module';
import { hsgAlmaViewitAfterModule } from './modules/prm-alma-viewit-after/hsg-alma-viewit-after.module';
import { hsgLocationItemsAfterModule } from './modules/prm-location-items-after/hsg-location-items-after.module';
import { hsgPersonalInfoAfterModule } from './modules/prm-personal-info-after/hsg-personal-info-after.module';
import { hsgRequestAfterModule } from './modules/prm-request-after/hsg-request-after.module';
import { hsgUserAreaExpandableAfterModule } from './modules/prm-user-area-expandable-after/hsg-user-ara-expandable-after.module';

let app = angular.module('viewCustom', ['angularLoad'])

app.requires.push(hsgExceptionHandlerModule.name);
app.requires.push(hsgHowovpAfterModule.name);
app.requires.push(hsgAlmaViewitAfterModule.name);
app.requires.push(hsgLocationItemsAfterModule.name);
app.requires.push(hsgPersonalInfoAfterModule.name)
app.requires.push(hsgRequestAfterModule.name);
app.requires.push(hsgUserAreaExpandableAfterModule.name);

app.run(function () { console.log('** app running **') });
