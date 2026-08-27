import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      orderableDocumentListDeskItem({ type: "project", title: "Projects", S, context }),
      orderableDocumentListDeskItem({ type: "service", title: "Services", S, context }),
      orderableDocumentListDeskItem({ type: "skillGroup", title: "Skill Groups", S, context }),
      orderableDocumentListDeskItem({ type: "experience", title: "Experience", S, context }),
      orderableDocumentListDeskItem({ type: "education", title: "Education", S, context }),
    ]);
