import { Controller, Post, UseInterceptors, UploadedFile, UploadedFiles, Body } from "@nestjs/common";
import { FileInterceptor, FileFieldsInterceptor } from "@nestjs/platform-express";
import { UploadService } from "./upload.service";

@Controller('upload')
export class UploadController {

    constructor(
        private uploadService: UploadService,
    ) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file, @Body('sequence') sequence: string, @Body('type') type: string) {
        const ext = file.originalname.split('.').pop();
        return this.uploadService.uploadFile(file.buffer, `${type}_${sequence}.${ext}`);
    }
}
