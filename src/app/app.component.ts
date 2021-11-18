import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopping-app'
  
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test'}];
  
  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent 
    })
  }
  onBlueprintAdded(BlueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: BlueprintData.serverName,
      content: BlueprintData.serverContent
    })
  }
  
}
