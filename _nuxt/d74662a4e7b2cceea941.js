(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1007:function(e,t,n){var map={"./01-01-using-this-homebrew.md":276,"./01-02-introduction.md":277,"./01-03-universe-to-explore.md":278,"./01-04-using-these-rules.md":279,"./01-05-how-to-play.md":280,"./01-06-adventures.md":281,"./02-01-step-by-step-characters.md":282,"./02-02-choose-a-race.md":283,"./02-03-choose-a-class.md":284,"./02-04-determine-ability-scores.md":285,"./02-05-describe-your-character.md":286,"./02-06-appearance.md":287,"./02-07-alignment.md":288,"./02-08-background.md":289,"./02-09-personality.md":290,"./02-10-languages.md":291,"./02-11-choose-equipment.md":292,"./02-12-coming-together.md":293,"./03-01-beyond-first-level.md":294,"./03-02-multiclassing.md":295,"./03-03-inspiration.md":296,"./03-04-paragon-renegade.md":297,"./04-01-using-ability-scores.md":298,"./04-02-ability-scores-and-modifiers.md":299,"./04-03-advantage-and-disadvantage.md":300,"./04-04-proficiency-bonus.md":301,"./04-05-ability-checks.md":302,"./04-06-strength.md":303,"./04-07-dexterity.md":304,"./04-08-constitution.md":305,"./04-09-intelligence.md":306,"./04-10-wisdom.md":307,"./04-11-charisma.md":308,"./04-12-saving-throws.md":309,"./05-01-missions.md":310,"./05-02-time.md":311,"./05-03-movement.md":312,"./05-04-environment.md":313,"./05-05-social-interaction.md":314,"./05-06-resting.md":315,"./05-07-between-missions.md":316,"./06-01-starting-equipment.md":317,"./06-02-armor.md":318,"./06-03-custom-armor.md":319,"./06-04-weapons.md":320,"./06-05-mods.md":321,"./06-06-medi-gel.md":322,"./06-07-thermal-clips.md":323,"./06-08-grenades.md":324,"./06-09-heavy-weapon-charges.md":325,"./06-10-omni-gel.md":326,"./06-11-tools-kits.md":327,"./06-12-omni-tool-programs.md":328,"./07-01-wealth.md":329,"./07-02-selling-items.md":330,"./07-03-discounts.md":331,"./07-04-lifestyle-expenses.md":332,"./07-05-cost-of-things.md":333,"./08-01-vehicle-concept.md":334,"./08-02-transports-starships.md":335,"./08-03-basic-information.md":336,"./08-04-systems.md":337,"./08-05-crew.md":338,"./08-06-starship-combat.md":339,"./08-07-travel.md":340,"./08-08-other-rules.md":341,"./08-10-creating-vehicles.md":342,"./09-01-order-of-combat.md":343,"./09-02-movement-and-position.md":344,"./09-03-actions-in-combat.md":345,"./09-04-making-an-attack.md":346,"./09-05-cover.md":347,"./09-06-damage-and-healing.md":348,"./09-07-shields.md":349,"./10-01-what-is-a-spell.md":350,"./10-02-spell-types.md":351,"./10-03-spell-level.md":352,"./10-04-learning-spells.md":353,"./10-05-spell-slots.md":354,"./10-06-casting-a-spell.md":355,"./10-07-primer-and-detonators.md":356,"./11-01-monster-overview.md":357,"./11-02-monster-types.md":358,"./11-03-getting-monsters.md":359};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=1007},1008:function(e,t,n){"use strict";n(44);var r={components:{MarkdownContent:n(83).a},props:{id:{type:String,default:""}},computed:{item:function(){return n(1007)("./".concat(this.id,".md"))},title:function(){return this.item.attributes.title},newRule:function(){return this.item.attributes.new},changeRule:function(){return this.item.attributes.change},hash:function(){return this.id.split("-").splice(2).join("-")}}},o=n(4),d=n(6),m=n.n(d),c=n(190),l=n(29),h=n(191),f=n(194),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"elevation-0 transparent",attrs:{id:e.hash}},[n("v-card-title",{staticClass:"headline"},[e._v(e._s(e.title)),e.newRule?n("v-chip",{attrs:{color:"secondary","text-color":"white",small:""}},[e._v("new")]):e._e(),e.changeRule?n("v-chip",{attrs:{color:"orange accent-2","text-color":"black",small:""}},[e._v("change")]):e._e()],1),n("v-card-text",[n("markdown-content",{attrs:{component:e.item.vue}})],1)],1)}),[],!1,null,null,null);t.a=component.exports;m()(component,{VCard:c.a,VCardText:l.b,VCardTitle:h.a,VChip:f.a})},1263:function(e,t,n){"use strict";n.r(t);n(59),n(20),n(23),n(15),n(40),n(34);var r=n(41),o=n(1008),d=n(219),m=n(37);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={components:{RuleCard:o.a},computed:l(l({},Object(m.d)("phb",{version:"version",pages:"pages"})),{},{rules:function(){var e=this;return d.filter((function(t){return t.section===e.pages[e.$route.name].rules}))},title:function(){return this.pages[this.$route.name].name}}),head:function(){return{title:"".concat(this.title," | Mass Effect 5e"),meta:[{hid:"description",name:"description",content:"Learn how to buy and sell equipment, keep up a lifestyle, and go out on the town"}]}},layout:"phb"},f=n(4),v=n(6),y=n.n(v),w=n(185),component=Object(f.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",[t("h2",{staticClass:"display-1 hidden-sm-and-down"},[this._v(this._s(this.title))]),this._l(this.rules,(function(e,n){return t("div",{key:n},[t("rule-card",{attrs:{id:e.id}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;y()(component,{VContainer:w.a})}}]);