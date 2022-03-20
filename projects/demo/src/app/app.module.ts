import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownEditorModule } from '@mvolkert/ngx-markdown-editor';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MarkdownEditorModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
