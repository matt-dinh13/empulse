---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/CLM"
domain: "Feature Guide"
element_id: 1566383
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Document management

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/CLM

## 📝 Notes

Document management domain consists two parts:

##Document Type definition
The entity presents definition of Documents, their attributes and rules for validations
Adding and updating of the Document Types definitions is perofmed via DB scripts (no GUI available for that)
HomerSelect.BSL.Analysis Model.COMMON for BSL.Document.Document Type Definition.Logical Data Model.Document Type

##Document
Entity represents particular documents related to a business entity (e.g. Contract/Application, DDM, Loan service, Person, Supplement). 
The document can contain various information defined by Document Attribute (e.g. Number of document, Issue date).
There is possible to associate a file reference(s) to the Document (scan, pdf). The file object is stored in the Cabinet (file storage).
HomerSelect.BSL.Analysis Model.COMMON for BSL.Document.Document Instances.Logical Data Model

Functionality overview:
## Contract/Client detail documents management
- Managing of client / contract documents is available directly on every contract detail.

Add contract documents can be called from following tabs on contract detail depending on contract status:

- Contract documents 
- Client documents 
- Direct debit mandates 

Edit contract document enables to change functionality of attributes and is dependent on contract status:

- Attribute additional 
- Delete document

## Add document
- Document type. Contains all available document types (id card, passport, driving license, electricity bill, etc.) for selected relation type (contract document, client document, direct debit mandate document).
- Additional information. Note related to the document can be entered.
- Other fields. Fields for information relevant for document type. For some types there can be no fields available, just only additional information.

## Contract package
- Package for sending contract documentation from POS (Salesroom) to HomeCredit. 

Contract documents could be added to Contract package from 2 starting points:

- Contract detail
- Search for contract (with filter Contracts for Registration)

After clicking on **Add to contract package** it is necessary tick all checkboxes for the documents and click on **Add to contract package**. It's not possible to add a contract to contract package if the contract has no documents. 

## Search for contract package
- When **Search for Contract package** is used user can specify search criteria like Contract package code, Contract number, Salesroom name, Salesroom code, Date created (of contract package) from / to etc.

## Package Status
- Active. Contract package in active status means contracts still can be added to this package.
- Closed. Closed contract package means number of contracts in contract package reached limit and no more contracts can be added.

## Package location
- POS. Means contract package is still in salesroom
- Sent to back-office. Contract package is on the way to back-office (in the mail)
- Back-office. Contract package is located in the back-office

## Contract package detail
- When contract package is displayed, user can do different actions with package (print, send to central office, receive, remove contracts from it)

## 📊 Appears In (1 diagrams)

- Package: CLM
