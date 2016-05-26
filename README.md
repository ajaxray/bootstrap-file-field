Bootstrap File Field
============================

jQuery plugin to enhance file fields with modern features and bootstrap design.
Smart file selection features (e,g, restricting size and file type, showing selected file list etc.)
with generic form submission process, **no ajax upload**.

What it does?
------------------

* Display file upload field like Bootstrap buttons
* Can restrict file types, don't allow wrong file types
* Can set maximum and/or minimum file size limit 
* Can set maximum and/or minimum total size limit (for multiple selection)
* Can set maximum and/or minimum number of files can be selected (for multiple selection)
* All restrictions are checked on client side using HTML5 File API
* Display user friendly errors if any restriction prevented file selection
* Display name/list of selected files (if no error)  

![Screenshot](/demo/bootstrap_file_field.jpg "Bootstrap FIle Field Screenshot")

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

**Initiate with data attribute, no customization**  
`<input type="file" data-field-type="bootstrap-file-field" name="sample1">`

**Initiate with data attribute, with custom label, class and file types**  
```
<input type="file" name="sample2"
       data-field-type="bootstrap-file-field"
       data-label="Select Image Files"
       data-btn-class="btn-primary"
       data-file-types="image/jpeg,image/png">`
```

**Initiate with javascript by class/selector**  
HTML :  
`<input type="file" class="smart-field" name="sample3[]" multiple>`  
JavaScript :  
```
$('.smart-file').smartFileField({  
    maxNumFiles: 2,  
    fileTypes: 'image/jpeg,image/png',  
    maxFileSize: 80000 // 80kb in bytes  
});
```
**Overwriting initial (by javascript) configuration using data attribute**

Let's assume, this field has already been initiated with previous example (as it has class <code>smart-file</code>).
Now we'll add and modify some of customization options using data attributes.

```
<input type="file" name="sample4[]" class="smart-file" multiple
    data-label="Select PDF Documents"
    data-btn-class="btn-primary"
    data-file-types="application/pdf">
```

Check the `demo/index.html` file (in downloaded folder) to see all the above examples in action.

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

| What to configure| JS Settings Option| Data attribute| Default|
| --- | --- | --- | --- |
| Button label | label | data-label | Select File|
| Button class | btnClass | data-btn-class | btn-default |    
| Allowed file types by [mime type](https://www.sitepoint.com/web-foundations/mime-types-complete-list/) (comma separated values) | fileTypes | data-file-types | *Ignored* |    
| Maximum file size (in byte) | maxFileSize | data-max-file-size | *Ignored* |    
| Minimum file size (in byte) | minFileSize | data-min-file-size | *Ignored* |    
| Maximum total file size (M) | maxTotalSize | data-max-total-size | *Ignored* |    
| Maximum number of files (M) | maxNumFiles | data-max-num-files | *Ignored* |    
| Minimum number of files (M) | minNumFiles | data-min-num-files | *Ignored* |
(M) = For multiple file selection only


Inspired by: http://www.abeautifulsite.net/whipping-file-inputs-into-shape-with-bootstrap-3/
