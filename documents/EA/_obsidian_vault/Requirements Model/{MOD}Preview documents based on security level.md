---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18207 (CLM-5122) Document preview on Registration tab, Contract documents tab, Documents printouts tab"
domain: "Requirements Model"
element_id: 1731356
diagrams: 3
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Preview documents based on security level

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18207 (CLM-5122) Document preview on Registration tab, Contract documents tab, Documents printouts tab

## 📝 Notes

This function allows user to preview or download document, if the user has an access right sufficient for the security level of the document from selected documents tab.

Input

	
- List of users access rights
	
- Selected tab  (Contract documents tab or Client documents tab or Printout documents tab {ADD CLM-5122}or Registration tab{/ADD})
	
- Document security level (Document->Document_Type.Security_level)


Output:

	
- User is allowed or not allowed to preview or download document


Steps:
User can download documents based on their security level with the following access rights from the following tabs:

Client document tab
If LOR Switch controlIndividualDocumentSecurityLevel = False or Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].exists = false then

	
- with the access right 01.128 Preview client document (file download) user can download all documents with Document_Type.Security_level = 0
	
- with the access right 01.128 Preview client document with security level 1 (file download) user can download all documents with Document_Type.Security_level <= 1


	
- with the access right 01.128 Preview client document with security level 2 (file download) user can download all documents with Document_Type.Security_level <= 2


If Document->Document Type Flag.Type = PERSON then:

	
- If user has no access right for client documents download, then with the access right 01.128 Preview client document user can preview all documents with Document_Type.Security_level =  0
	
- If user has no access right for client documents download with security level <=1, then with the access right 01.128 Preview client document with security level 1 user can preview all documents with Document_Type.Security_level <= 1
	
- If user has no access right for client documents download with security level <=2, then with the access right 01.128 Preview client document with security level 2 user can preview all documents with Document_Type.Security_level <= 2


If LOR Switch controlIndividualDocumentSecurityLevel = True and Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].exists = True then 

	
- with the access right 01.128 Preview client document (file download) user can download all documents with Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].Value = 0


	
- with the access right 01.128 Preview client document with security level 1 (file download) user can download all documents with Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].Value <= 1


	
- with the access right 01.128 Preview client document with security level 2 (file download) user can download all documents with Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].Value <= 2


If Document->Document Type Flag.Type = PERSON then:

	
- If user has no access right for client documents download, then with the access right 01.128 Preview client document user can preview all documents with  Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].Value = 0
	
- If user has no access right for client documents download with security level <=1, then with the access right 01.128 Preview client document with security level 1 user can preview all documents with  Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].Value <= 1
	
- If user has no access right for client documents download with security level <=2, then with the access right 01.128 Preview client document with security level 2 user can preview all documents with  Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].Value <= 2


Contract documents tab
If LOR Switch controlIndividualDocumentSecurityLevel = False or Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].exists = false then

	
- with the access right 01.128 Preview contract document (file download) user can download all documents with Document_Type.Security_level = 0
	
- with the access right 01.128 Preview contract document with security level 1 (file download) user can download all documents with Document_Type.Security_level <= 1
	
- with the access right 01.128 Preview contract document with security level 2 (file download) user can download all documents with Document_Type.Security_level <= 2


{ADD CLM-5122}If Document->Document Type Flag.Type = PERSON then:

	
- If user has no access right for contract documents download, then with the access right 01.128 Preview client document user can preview all documents with Document_Type.Security_level =  0
	
- If user has no access right for contract documents download with security level <=1, then with the access right 01.128 Preview client document with security level 1 user can preview all documents with Document_Type.Security_level <= 1
	
- If user has no access right for contract documents download with security level <=2, then with the access right 01.128 Preview client document with security level 2 user can preview all documents with Document_Type.Security_level <= 2{/ADD}



If LOR Switch controlIndividualDocumentSecurityLevel = True and Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].exists = True then 

	
- with the access right 01.128 Preview contract document (file download) user can download all documents with Document_Attribute[.Code = 'SECURITY_LEVEL'].Value = 0
	
- with the access right 01.128 Preview contract document with security level 1 (file download) user can download all documents with Document_Attribute[.Code = 'SECURITY_LEVEL'].Value <= 1


	
- with the access right 01.128 Preview contract document with security level 2 (file download) user can download all documents with Document_Attribute[.Code = 'SECURITY_LEVEL'].Value <= 2


{ADD CLM-5122}If Document->Document Type Flag.Type = PERSON then:

	
- If user has no access right for contract documents download, then with the access right 01.128 Preview contract document user can preview all documents with  Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].Value = 0
	
- If user has no access right for contract documents download with security level <=1, then with the access right 01.128 Preview contract document with security level 1 user can preview all documents with  Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].Value <= 1
	
- If user has no access right for contract documents download with security level <=2, then with the access right 01.128 Preview contract document with security level 2 user can preview all documents with  Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].Value <= 2{/ADD}


Document printouts tab
If LOR Switch controlIndividualDocumentSecurityLevel = False or Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].exists = false then 

	
- with the access right 01.128 Preview document printouts (file download) user can download all documents with Document_Type.Security_level = 0
	
- with the access right 01.128 Preview document printout with security level 1 (file download) user can download all documents with Document_Type.Security_level <= 1


	
- with the access right 01.128 Preview document printout with security level 2 (file download) user can download all documents with Document_Type.Security_level <= 2


{ADD CLM-5122}If Document->Document Type Flag.Type = PERSON then:

	
- If user has no access right for document printouts download, then with the access right 01.128 Preview document printouts user can preview all documents with Document_Type.Security_level =  0
	
- If user has no access right for document printouts download with security level <=1, then with the access right 01.128 Preview document printout with security level 1 user can preview all documents with Document_Type.Security_level <= 1
	
- If user has no access right for document printouts download with security level <=2, then with the access right 01.128 Preview document printout with security level 2 user can preview all documents with Document_Type.Security_level <= 2{/ADD}


If LOR Switch controlIndividualDocumentSecurityLevel = True and Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].exists = True then 

	
- with the access right 01.128 Preview document printouts (file download) user can download all documents with Document_Attribute[.Code = 'SECURITY_LEVEL'].Value = 0


	
- with the access right 01.128 Preview document printout with security level 1 (file download) user can download all documents with Document_Attribute[.Code = 'SECURITY_LEVEL'].Value <= 1
	
- with the access right 01.128 Preview document printout with security level 2 (file download) user can download all documents with Document_Attribute[.Code = 'SECURITY_LEVEL'].Value <= 2


{ADD CLM-5122}If Document->Document Type Flag.Type = PERSON then:

	
- If user has no access right for printouts documents download, then with the access right 01.128 Preview document printouts user can preview all documents with  Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].Value = 0
	
- If user has no access right for printouts documents download with security level <=1, then with the access right 01.128 Preview document printout with security level 1 user can preview all documents with  Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].Value <= 1
	
- If user has no access right for printouts documents download with security level <=2, then with the access right 01.128 Preview document printout with security level 2 user can preview all documents with  Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].Value <= 2


Registration tab
There are only two basic rights relating to files - it's for:

	
- download - if user has access right 01.128 Preview registration document (file download), then user can download all documents
	
- preview - if user has access right 01.128 Preview registration document, then user can preview all documents


Note: Download rights are checked first and override preview rights which means that if user has both rights, download rights will be used.

There is no logic in setting also security level on document attributes or types since registration operator needs to be able to see the files to be able to confirm that they are correct.{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.128 Preview document]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-18207 (CLM-5122) Document preview on Registration tab, Contract documents tab, Documents printouts tab
- Custom: CBL-8720 (CLM-2719) Availability of DA document to Sales Agents & Retailer Agents
- Custom: Document page information
