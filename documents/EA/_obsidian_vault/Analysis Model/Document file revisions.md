---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Document page information (panel)"
domain: "Analysis Model"
element_id: 1741096
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Document file revisions

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Document page information (panel)

## 📝 Notes

Grid containing the list of all revisions (including their details) of respective document file.

By default, only the latest revision of the document file is visible until the grid is fully expanded using the respective button.

Note: If there is no document file of particular document file type available for respective document (i.e. Document->Document_DMS_File[.File_Type=FileType]->DMS_File does not exist), message MSG_NO_RECORDS_FOUND is displayed instead of any record directly within the grid. 

Individual records within the grid are ordered by:

	
- Revision DESC


Note: The ordering cannot be changed by user.


Localization code: none

## 🔗 Connections (3)

- → Dependency: [[{MOD}01.128 Preview document]]
- → Dependency: [[Displaying tooltips]]
- ← Dependency: [[˅ ˅ ˅]]

## 📊 Appears In (1 diagrams)

- Custom: Document page information

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Revision | number |  |
| Filename | text |  |
| Insert time | dateTime |  |
| Uploaded by | User Name |  |
