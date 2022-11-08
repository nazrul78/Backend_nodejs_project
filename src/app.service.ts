import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const html = `<!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    </head>
    <body>
    
    <h1 style="color:red;">403 forbidden</h1>
  
    
    </body>
    </html>
    
    
    `;


    return html;
  }
}
