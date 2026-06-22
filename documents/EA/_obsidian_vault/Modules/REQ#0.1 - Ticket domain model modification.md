---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-33_Ticketing separation"
domain: "Modules"
element_id: 1799572
diagrams: 2
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ#0.1 - Ticket domain model modification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-33_Ticketing separation

## 📝 Notes

There are described modifications of the Ticketing domain entities and some data migrations which happen in connection of the changes.

Original TicketType entity is renamed to TicketCategory
Original TicketSubtype entity is renamed to TicketType
Original TicketAttachment is renamed into Attachment
Original TicketLog entity is renames into StatusTransition

Create new  RelatedSubject entity in composition to Ticket
Create an enumeration of RelatedSubjectType

The RelatedSubject replaces following attributes of the Ticket entity:

	
- reference to Contract via Contract ID is no longer used, Contract Code is used and stored into RelatedSubject.SubjectCode for SubjectType = 'CONTRACT'


	
- reference to Supplement via Supplement ID  is no longer used, Supplement Code is used and stored into RelatedSubject.SubjectCode for SubjectType = 'SUPPLEMENT'


	
- reference to Salesroom via Contract Salesroom ID/Supplement Salesroom ID is no longer used, Salesroom Code is used and stored into RelatedSubject.Salesroom Arranged On  for Subject Type = 'CONTRACT' or 'SUPPLEMENT' by the original reference 


	
- reference to Contract Package via Contract Package ID is no longer used, Contract Package Code is used instead of that and stored into RelatedSubject.ArrangedBy for SubjectType = 'PACKAGE'
	
- reference to Document via Document ID is no longer used, Document ExternalId is used and stored into RelatedSubject.SubjectCode for SubjectType = 'SUPPLEMENT' (notice: ExternalId still does not exist in the Document entity)
	
- Supplement Created By is no longer used; it will be stored into RelatedSubject.ArrangedBy for SubjectType = 'SUPPLEMENT'
	
- Contract Arranged By is no longer used; it will be stored into RelatedSubject.ArrangedBy for SubjectType = 'CONTRACT'


TicketType entity modification (originally TicketSubtype)

	
- rename original SubtypeCount attribute to TypeCount


Attachment entity modification (originally Ticket Document)

	
- reference to Document via Document ID is removed - Document entity will not be used for storage attachments. These will be directly stored into the Cabinet. The UUID and FileName from the already existing attachments (Document -> DMS File) will be migrated into the Attachment.ExternalId and FileName atributes.


Relation between Communication and Ticket via CommunicationRecord2Ticket:

	
- reference to Ticket in CommunicationRecord2Ticket is removed, related CommunicationRecord Id will be stored into RelatedSubject with SubjectType = 'COMMUNICATION_RECORD' 


Impacts on other modules/entities:
Document - something like "external ID" is missing and has to be established

## 📊 Appears In (2 diagrams)

- Custom: Ticketing-separation
- Logical: Ticketing domain model modification
