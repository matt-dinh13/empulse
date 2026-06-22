---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/User interface model"
domain: "Analysis Model"
element_id: 1863729
diagrams: 1
connections: 1
tags:
  - object
  - analysis-model
---

# 🔸 List of files for download

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/User interface model

## 📝 Notes

The component for showing a list of files related to the Document.  The generated links serves to download the content of the document file from the archive system (i.e. Cabinet)
{ADD CSI-1122}It runs {ADD}13.290 Download Contract Supplement Document use case with content.files parameters
If content.files is empty, the button is hidden{/ADD}

{DEL CSI-1122}Visibility of button is defined in use case {MOD}01.275 Show registration tab 

After click system finds all DMS files for the document (Document -> Document DMS File[File Type = FILE] -> DMS File) and download each of them by calling UC 01.008 Download file from document archive  
System sends the retrieved document file as a response to the user's browser (for its download to a local drive) with default name constructed as: 
- if  PageSpecification is null then  'ContractCode'_'DocumentType'.'originalExtension'
- else  'ContractCode'_'DocumentType'_'PageSpecification'.'originalExtension'{/DEL}

## 🔗 Connections (1)

- → Dependency: [[{ADD}13.290 Preview Contract Supplement Document]]

## 📊 Appears In (1 diagrams)

- Custom: Document registration panel - User interface model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| File type |  |  |
| Page name |  |  |
| Download | action |  |
