---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Instances/Business rules"
domain: "Modules"
element_id: 1753412
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}Document File validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Instances/Business rules

## 📝 Notes

There is described set of validations for Document File array values (used by CreateDocument and CreateDocumentFile).

Inputs:

	
- Document File array
	
- Document Type
	
- Document (optional)


Format of validation: Rule definition; returned error value if validation fails
If global setting UseDMSDocTypeDef = true then Document Type definition from DMS scheme is used instead of HO scheme

Following validations are used independently for each item from the Document File array:

	
- fileTypeCode is defined and one of  (FILE, PRINTOUT, SIGNATURE); FILETYPE_NOT_EXISTS
	
- If pageSpecificationCode is specified then value has to be defined in Document type -> Document Type Page specification; PAGESPECIFICATION_NOT_EXISTS
	
- If pageSpecificationCode is not specified then no value {ADD CSI-1040} or just one value with Merged File = TRUE (other page specification with MergedFile=false can exists) {/ADD} has to be defined in Document type -> Document Type Page specification; PAGESPECIFICATION_MISSING
	
- Just one of the attributes fileUUID or fileContent has to be defined (not both); FILEUUID_OR_FILECONTENT_MUSTBE_DEFINED
	
- fileName can be defined only together with fileContent; FILENAME_CAN_BE_USED_WITH_FILECONTENT
	
- fileName must be defined together with fileContent; FILENAME_MISSING
	
- filePartName must be defined together with fileContent; FILEPARTNAME_MISSING
	
- If Document is defined then:
- if fileUUID is defined then no related DMS File with the same fileTypeCode and pageSpecificationCode exists (including NULL); FILE_ALREADY_EXISTS
	
- {ADD CSI-1124}If fileCustomData is provided, it can be defined only together with fileContent; CUSTOM_DATA_CAN_BE_USED_WITH_FILECONTENT{/ADD}


Following validation checks combination through all items in Document File array:

	
- Combination of fileTypeCode  and pageSpecificationCode is unique; FILE_DUPLICITY

## 🔗 Connections (2)

- ← Dependency: [[CreateDocument validation]]
- ← Dependency: [[14.050 Create Document File (UseCase 1880045)]]

## 📊 Appears In (3 diagrams)

- Custom: Business rules
- Custom: CBL-14943 (CSI-1040) Support for merged files
- Use Case: Document services - Use Case Model
