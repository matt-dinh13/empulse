---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)"
domain: "Requirements Model"
element_id: 1612008
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #3 - LAP vector preparation for ALOP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)

## 📝 Notes

Goal of this requirement is to 

	
- get all data needed for LAP vector set up and sent the ALOP request for approval


	
- create a message for notification about result of ALOP request processing.


	
- Regarding the LAP vector filling – as we still don’t have whole LAP vector definition for ALOP, only some technical data will be set up here. They are highlighted yellow in the attached excel.


Important events to be notified:

	
- ALOP is approved (in case of a document is required - ALOP documents is prepared)
	
- ALOP is canceled (it is canceled by client/LAP/process inactivity - timeout)


#Open questions to the notification (TECH):

	
- Which type of messaging used? KAFKA?
	
- which systems will consume the message?


Steps of the Expected CLM support of the ALOP process are to be covered: 4 and 5

Hints to be solved: generating requestId value not to in conflict with other apps (e.g. Moble apps requests for approval)
Q: Sharing references to previous scorings and data used for scoring
A: Libor Lakota (LAP): Samozrejme pokud mob app nebo i CLM strci data do nejake HoSel databaze, tak staci dat LAP pouze identifikator těchto dat napr cuid pro data ulozena v db CIFu.
Mobilni appka zavola LAP pro PRELIM část s těmito identifikátory: source = MOB_APP a requestId = 123. 
Od CLM potrebuju, aby az bude volat LAP pro MAIN část tak aby nas zavolal s těmito identifikátory: source = MOB_APP a previousRequestId = 123, requestId = 987. 
LAP si na zaklade toho dohleda PRELIM vektor a vhodne fullpathy prekopiruje do MAIN vektoru.
Bude potřeba ale zajistit, aby se ciselne rady pro requestId v mob app a clm nemohly potkat tj mob app zacne pocitat od 1 a clm zacne pocitat od 1 000 000.

A list of tech fullpaths LAP needs to get from CLM for ALOP approval:

	
- approvalPriority
	
- idPreviousRequest | (ID of request used by mob app for calling PRELIM phase)
	
- sourceSystemCode | MOB_APP
	
- sysdate
	
- credit.scoringTypeCode | BASICSCORING
	
- credit.stageProcessType | TWO_BLOCK
	
- initalWfCode | MAIN
	
- evidSrv | contract code of the REL contract
	
- channelCode | ALOP (or something like this)
	
- externalNumber | either CUID or contract code of the REL contract


Planned development: Sprint #82

Changes tagged in the SD as: CSI-148

## 🔗 Connections (1)

- → Generalization: [[ALOP Process description of CLM part support]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-244 (CLM-971) Cash on card with separate limit (ALOP)
