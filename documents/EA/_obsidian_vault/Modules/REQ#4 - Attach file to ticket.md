---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services"
domain: "Modules"
element_id: 1799524
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 REQ#4 - Attach file to ticket

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services

## 📝 Notes

Requirement
Method attaches a file to the provided Ticket
Request

	
- Ticket code


	
- File name


	
- File content

Response

	
- Result of activity


Proposed solution:
use Attachments.POST with request parameters: UploadAttachmentRequest 

Required parameters in UploadAttachmentRequest:

	
- ticketCode = code of Ticket (mandatory)
	
- file = uploaded file sent as Content-Type = multipart/form-data
	
- comment = a notice to the file upload up to 2047 chars (optional)


Another conditions:

	
- calling system has role having UC10.070 privilege

## 🔗 Connections (1)

- → Generalization: [[Requirement - Ticketing web services for exposing]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services
