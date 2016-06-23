Bootstrap File Field
============================

jQuery plugin to enhance file fields with modern features and bootstrap design.
Smart file selection features (e,g, showing thumbs, restricting size and file type etc.)
while using generic form submission, **no ajax upload**.

What it does?
------------------

* Display file upload field like Bootstrap buttons
* Can display preview thumbs of selected images
* Can restrict file types - allow only configured mime types
* Can set maximum and/or minimum file size limit 
* Can set maximum and/or minimum total size limit
* Can set maximum and/or minimum number of files can be selected 
* All restrictions are checked on client side using HTML5 File/FileList/FileReader APIs
* Display user friendly errors if any restriction prevented file selection
* Display name/list of selected files (if no error and preview is off)  

Check [this live demo](http://ajaxray.com/demo/BootstrapFileField/demo/), it's usability + simplicity!

![Screenshot](/demo/bootstrap-file-field-2.jpg "Bootstrap File Field Screenshot")

Install
------------------
**Using bower** 

`bower install bootstrap-file-field --save`

**Manual Download**  

[Download The Zip](https://github.com/ajaxray/bootstrap-file-field/archive/master.zip) file and extract to appropriate directory.  

Then Include the plugin css file  
`<link rel="stylesheet" type="text/css" href="path/to/plugin-dir/src/css/bootstrap_file_field.css">`  
And the JS file  
`<script type="text/javascript" src="path/to/plugin-dir/src/js/bootstrap_file_field.js"></script>`

Remember to include jQuery js and Bootstrap css files before plugin files. Also, the file paths may have to be adjusted based on your local setup.


How to use
------------------

**Initiating with data attribute, no customization**
```
<input type="file" data-field-type="bootstrap-file-filed" name="sample1">
```

**Showing image preview, setting custom label, class and file types. Allows multiple.**
```
<input type="file" name="sample3[]"    
    data-field-type="bootstrap-file-filed"  
    data-label="Select Image Files"  
    data-btn-class="btn-primary"  
    data-file-types="image/jpeg,image/png,image/gif"  
    data-preview="on"  
    multiple >
```

**Allow PDF files only. Preview off**
```
<input type="file" name="sample4[]"  
    data-field-type="bootstrap-file-filed"  
    data-label="Select PDF Files"  
    data-file-types="application/pdf"  
    multiple >
```

**Initiating with javascript by class/selector. Select at most 2 images below 80kb each**

HTML :  
`<input type="file" class="smart-file" name="sample3[]" multiple>`    
JavaScript :  
```
$('.smart-file').bootstrapFileField({   
    maxNumFiles: 2,  
    fileTypes: 'image/jpeg,image/png',  
    maxFileSize: 80000 // 80kb in bytes  
});
```

Check the `demo/index.html` file (in downloaded source) or [this live demo](http://ajaxray.com/demo/BootstrapFileField/demo/) to see more examples in action (including all the above).

Supported Restrictions
-------------------------

You can add restrictions based on - 

* File Types (using mime types)
* Maximum File Size
* Minimum File Size
* Maximum Total Size (for multiple selection)
* Maximum number of files
* Minimum number of files


Configuration options
--------------------------------

You can activate plugin on a file field by adding attribute
`data-field-type="bootstrap-file-field"` or using javascript (see examples above).
Then you can use the following settings keys (as parameter to javascript activation function)
or data attributes to configure your file field.

| What to configure| JS Settings Option| Data attribute| Default|
| --- | --- | --- | --- |
| Button label | label | data-label | Select File/Select Files |
| Button class | btnClass | data-btn-class | btn-default |    
| Preview thumb | preview | data-preview | off |    
| Allowed file types  by [mime type](https://www.sitepoint.com/web-foundations/mime-types-complete-list/) (comma separated values) | fileTypes | data-file-types | *Ignored* |    
| Maximum file size (in byte) | maxFileSize | data-max-file-size | *Ignored* |    
| Minimum file size (in byte) | minFileSize | data-min-file-size | *Ignored* |    
| Maximum total file size (M) | maxTotalSize | data-max-total-size | *Ignored* |    
| Maximum number of files (M) | maxNumFiles | data-max-num-files | *Ignored* |    
| Minimum number of files (M) | minNumFiles | data-min-num-files | *Ignored* |
(M) = For multiple file selection 

Inspired by: http://www.abeautifulsite.net/whipping-file-inputs-into-shape-with-bootstrap-3/
