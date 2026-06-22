---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7299 (CLM-2396) Getting KYC Docs file for contract registration"
domain: "Requirements Model"
element_id: 1868355
diagrams: 2
connections: 1
tags:
  - guielement
  - requirements-model
---

# 🖥️ Download

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7299 (CLM-2396) Getting KYC Docs file for contract registration

## 📝 Notes

The button solves for downloading the content of the document from the archive system (i.e. Cabinet).

Visibility of button is defined in use case {MOD}01.275 Show registration tab 

After click system finds all DMS files for the document (Document -> Document DMS File[File Type = FILE] -> DMS File) and download each of them by calling UC 01.008 Download file from document archive  
System sends the retrieved document file as a response to the user's browser (for its download to a local drive) with default name constructed as: 
- if  PageSpecification is null then  'ContractCode'_'DocumentType'.'originalExtension'
- else  'ContractCode'_'DocumentType'_'PageSpecification'.'originalExtension'

## 🔗 Connections (1)

- → Dependency: [[{MOD}01.128 Preview document]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-7299 (CLM-2396) RBI Regulation for KYC Docs -To view KYC Docs on every contract
- Custom: Document registration form
