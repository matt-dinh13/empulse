---
type: Class
stereotype: "resources"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/TCK/v2/ticketInfos"
domain: "Analysis Model"
element_id: 1760571
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}ticketInfos

> **Type**: Class · **Stereotype**: «resources»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/TCK/v2/ticketInfos

## 📝 Notes

{ADD CLM-5374/}

https://tck.in00a1.cz.infra/tck/swagger/swagger-ui/index.html#/02.%20Ticket%20Infos%20V2/search

curl -X 'GET' \
 'https://tck.in00a1.cz.infra/tck/rest/v2/ticket-infos?searchType=TICKET_SEARCH&page=1&relatedSubjectTypeCode=CONTRACT&relatedSubjectCodes=4100000476' \
  -H 'accept: application/json'

EAID in TCK module in CLM EA project: {321BB8F3-5530-4cd8-92E7-8D256D6874FA} 

(edit search in EA to this:
SELECT ea_guid AS CLASSGUID, Object_Type AS CLASSTYPE, Name FROM t_object WHERE t_object.ea_guid = '<Search Term>';)

## 📊 Appears In (1 diagrams)

- Logical: ticketInfos
