webpackJsonp([10],{3523:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n.n(r),a=n(329),o=n.n(a),s=n(258),l=n.n(s),u=n(321),m=n.n(u),c=n(3896),d=n(3895);e.default=i.a.createClass({displayName:"GroupEditor.component",render:function(){return i.a.createElement(m.a,null,i.a.createElement(o.a,{onChange:this._tabChanged},i.a.createElement(l.a,{label:"Manage items in group"},i.a.createElement(c.a,{ref:"itemsForGroup"})),i.a.createElement(l.a,{label:"Manage groups for item"},i.a.createElement(d.a,{ref:"groupsForItem"}))))},_tabChanged:function(){this.refs.itemsForGroup.reset(),this.refs.groupsForItem.reset()}})},3768:function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(323),o=n.n(a),s=n(209),l=n.n(s);e.a=i.a.createClass({displayName:"ItemSelector.component",propTypes:{itemListStore:i.a.PropTypes.object.isRequired,onItemSelected:i.a.PropTypes.func.isRequired},getInitialState:function(){return{items:[]}},componentWillMount:function(){var t=this;this.subscription=this.props.itemListStore.map(function(t){return t.map(function(t){return{text:t.displayName,payload:t.id,model:t}})}).subscribe(function(e){e.length&&t.props.onItemSelected(e[0].model),t.setState({items:e})})},componentWillUnmount:function(){this.subscription&&this.subscription.unsubscribe&&this.subscription.unsubscribe()},renderOptions:function(){return this.state.items.map(function(t,e){return i.a.createElement(l.a,{key:e,primaryText:t.text,value:t.payload})})},render:function(){return i.a.createElement("div",null,i.a.createElement(o.a,{onChange:this._onChange,value:this.props.value&&this.props.value.id,fullWidth:!0},this.renderOptions()))},_onChange:function(t,e,n){this.state.items&&this.state.items[e]&&this.props.onItemSelected(this.state.items[e].model)}})},3769:function(t,e,n){"use strict";function r(t){return function(e){return 0===t.length||-1!==t.indexOf(e.name)}}var i=n(0),a=n.n(i),o=n(323),s=n.n(o),l=n(209),u=n.n(l),m=n(18),c=n.n(m),d=n(93),h=n.n(d),f=n(1371),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.a=a.a.createClass({displayName:"ModelTypeSelector.component",propTypes:{nameListFilter:a.a.PropTypes.arrayOf(a.a.PropTypes.string),onChange:a.a.PropTypes.func.isRequired},mixins:[f.a],getDefaultProps:function(){return{nameListFilter:[]}},getInitialState:function(){return{selectedModel:null}},componentWillMount:function(){var t=this;c.a.getInstance().then(function(e){return t.setState({models:e.models})})},_onChange:function(t,e,n){this.setState({selectedModel:n}),this.props.onChange(n)},renderOptions:function(){var t=this;return this.state&&this.state.models?this.state.models.mapThroughDefinitions(function(t){return t}).filter(r(this.props.nameListFilter)).map(function(e){return{text:t.getTranslation(h()(e.plural)),payload:e}}).map(function(t,e){return a.a.createElement(u.a,{key:e,primaryText:t.text,value:t.payload})}):[]},render:function(){return a.a.createElement("div",null,a.a.createElement(s.a,p({value:this.state.selectedModel,hintText:this.getTranslation("select_an_object_type"),fullWidth:!0},this.props,{onChange:this._onChange}),this.renderOptions()))}})},3895:function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(113),o=n.n(a),s=n(19),l=n.n(s),u=n(18),m=n.n(u),c=n(3769),d=n(49),h=n(3768),f=n(1371),p=n(460),g=function(){function t(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.a=i.a.createClass({displayName:"GroupsForItemManager.component",mixins:[f.a],getInitialState:function(){var t=d.a.create(),e=d.a.create(),n=d.a.create();return t.state=[],e.state=[],{itemListStore:n,itemStore:t,assignedItemStore:e,filterText:"",showGroupEditor:!1}},renderGroupEditor:function(){return this.state.showGroupEditor?i.a.createElement("div",null,i.a.createElement(h.a,{value:this.state.modelToEdit||this.state.itemListStore.state[0],itemListStore:this.state.itemListStore,onItemSelected:this._workItemChanged}),i.a.createElement(o.a,{fullWidth:!0,hintText:this.getTranslation("search_available_selected_items"),defaultValue:this.state.filterText,onChange:this._setFilterText}),i.a.createElement(p.a,{itemStore:this.state.itemStore,assignedItemStore:this.state.assignedItemStore,onAssignItems:this._assignItems,onRemoveItems:this._removeItems,filterText:this.state.filterText})):[]},render:function(){var t={padding:"2rem"},e=this.context.d2,n=["indicator","dataElement","categoryOption"].filter(function(t){return e.currentUser.canCreate(e.models[t+"Group"])});return i.a.createElement("div",{style:t},i.a.createElement(c.a,{nameListFilter:n,onChange:this._typeChanged}),this.renderGroupEditor())},createUrls:function(t){var e=this.state,n=e.modelToEdit,r=e.itemDefinition;return t.map(function(t){return n.modelDefinition.plural+"/"+n.id+"/"+r+"/"+t})},_assignItems:function(t){var e=this,n=this.createUrls(t).map(function(t){return m.a.getInstance().then(function(t){return t.Api.getApi()}).then(function(e){return e.post(t)})});return Promise.all(n).then(function(){var t=e.state.modelToEdit.modelDefinition.name+"Group";return m.a.getInstance().then(function(t){return Promise.all([t,t.models[e.state.modelToEdit.modelDefinition.name].get(e.state.modelToEdit.id)])}).then(function(n){var r=g(n,2),i=r[0],a=r[1];e.state.assignedItemStore.setState(a[i.models[t].plural]),e.setState({modelToEdit:a})})}).catch(function(t){return l.a.error(t)})},_removeItems:function(t){var e=this,n=this.createUrls(t).map(function(t){return m.a.getInstance().then(function(t){return t.Api.getApi()}).then(function(e){return e.delete(t)})});return Promise.all(n).then(function(){var t=e.state.modelToEdit.modelDefinition.name+"Group";return m.a.getInstance().then(function(t){return Promise.all([t,t.models[e.state.modelToEdit.modelDefinition.name].get(e.state.modelToEdit.id)])}).then(function(n){var r=g(n,2),i=r[0],a=r[1];e.state.assignedItemStore.setState(a[i.models[t].plural]),e.setState({modelToEdit:a})})}).catch(function(t){return l.a.error(t)})},_typeChanged:function(t){var e=this;t.list({paging:!1,fields:"id,displayName,name"}).then(function(t){return t.toArray()}).then(function(t){return e.state.itemListStore.setState(t)}).then(function(){return e.setState({showGroupEditor:!0})}).catch(function(t){return l.a.error(t)})},_setFilterText:function(t){this.setState({filterText:t.target.value})},_workItemChanged:function(t){var e=this,n=t.modelDefinition.name+"Group";m.a.getInstance().then(function(r){if(!r.models[n])return Promise.reject("This groupType does not have a model named: "+n);var i=r.models[n].list({paging:!1}),a=r.models[t.modelDefinition.name].get(t.id);Promise.all([i,a]).then(function(t){var i=g(t,2),a=i[0],o=i[1];e.state.itemStore.setState(a),e.state.assignedItemStore.setState(o[r.models[n].plural]),e.setState({modelToEdit:o,itemDefinition:r.models[n].plural})})}).catch(function(t){return l.a.error(t)})},reset:function(){var t=this;if(this.state.modelToEdit){var e=this.state.modelToEdit.modelDefinition.name+"Group";m.a.getInstance().then(function(e){return Promise.all([e,e.models[t.state.modelToEdit.modelDefinition.name].get(t.state.modelToEdit.id)])}).then(function(n){var r=g(n,2),i=r[0],a=r[1];t.state.assignedItemStore.setState(a[i.models[e].plural]),t.setState({modelToEdit:a})}).catch(function(t){return l.a.error(t)})}}})},3896:function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(113),o=n.n(a),s=n(19),l=n.n(s),u=n(18),m=n.n(u),c=n(3769),d=n(49),h=n(3768),f=n(1371),p=n(460),g=function(){function t(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.a=i.a.createClass({displayName:"ItemsInGroupManager.component",mixins:[f.a],contextTypes:{d2:i.a.PropTypes.object},getInitialState:function(){var t=d.a.create(),e=d.a.create(),n=d.a.create();return t.state=[],e.state=[],{itemListStore:n,itemStore:t,assignedItemStore:e,filterText:"",showGroupEditor:!1}},renderGroupEditor:function(){return this.state.showGroupEditor?i.a.createElement("div",null,i.a.createElement(h.a,{value:this.state.modelToEdit||this.state.itemListStore.state[0],itemListStore:this.state.itemListStore,onItemSelected:this._workItemChanged}),i.a.createElement(o.a,{fullWidth:!0,hintText:this.getTranslation("search_available_selected_items"),defaultValue:this.state.filterText,onChange:this._setFilterText}),i.a.createElement(p.a,{itemStore:this.state.itemStore,assignedItemStore:this.state.assignedItemStore,onAssignItems:this._assignItems,onRemoveItems:this._removeItems,filterText:this.state.filterText})):null},createUrls:function(t){var e=this.state,n=e.modelToEdit,r=e.itemDefinition;return t.map(function(t){return n.modelDefinition.plural+"/"+n.id+"/"+r+"/"+t})},render:function(){var t=this.context.d2,e=["indicatorGroup","dataElementGroup","categoryOptionGroup"].filter(function(e){return t.currentUser.canCreate(t.models[e])}),n={padding:"2rem"};return i.a.createElement("div",{style:n},i.a.createElement(c.a,{nameListFilter:e,onChange:this._typeChanged}),this.renderGroupEditor())},_assignItems:function(t){var e=this,n=this.createUrls(t).map(function(t){return m.a.getInstance().then(function(t){return t.Api.getApi()}).then(function(e){return e.post(t)})});return Promise.all(n).then(function(){var t=e.state.modelToEdit.modelDefinition.name.replace("Group","");return m.a.getInstance().then(function(t){return Promise.all([t,t.models[e.state.modelToEdit.modelDefinition.name].get(e.state.modelToEdit.id)])}).then(function(n){var r=g(n,2),i=r[0],a=r[1];e.state.assignedItemStore.setState(a[i.models[t].plural]),e.setState({modelToEdit:a})}).catch(function(t){return l.a.error(t)})})},_removeItems:function(t){var e=this,n=this.createUrls(t).map(function(t){return m.a.getInstance().then(function(t){return t.Api.getApi()}).then(function(e){return e.delete(t)})});return Promise.all(n).then(function(){var t=e.state.modelToEdit.modelDefinition.name.replace("Group","");return m.a.getInstance().then(function(t){return Promise.all([t,t.models[e.state.modelToEdit.modelDefinition.name].get(e.state.modelToEdit.id)])}).then(function(n){var r=g(n,2),i=r[0],a=r[1];e.state.assignedItemStore.setState(a[i.models[t].plural]),e.setState({modelToEdit:a})}).catch(function(t){return l.a.error(t)})})},_typeChanged:function(t){var e=this;t&&t.list({paging:!1,fields:"id,displayName,name"}).then(function(t){return t.toArray()}).then(function(t){return e.state.itemListStore.setState(t)}).then(function(){return e.setState({showGroupEditor:!0})}).catch(function(t){return l.a.error(t)})},_setFilterText:function(t){this.setState({filterText:t.target.value})},_workItemChanged:function(t){var e=this,n=t.modelDefinition.name.replace("Group","");m.a.getInstance().then(function(r){if(!r.models[n])return Promise.reject("This groupType does not have a model named: "+n);var i=r.models[n].list({paging:!1}),a=r.models[t.modelDefinition.name].get(t.id);Promise.all([i,a]).then(function(t){var i=g(t,2),a=i[0],o=i[1];e.state.itemStore.setState(a),e.state.assignedItemStore.setState(o[r.models[n].plural]),e.setState({modelToEdit:o,itemDefinition:r.models[n].plural})})}).catch(function(t){return l.a.error(t)})},reset:function(){var t=this;if(this.state.modelToEdit){var e=this.state.modelToEdit.modelDefinition.name.replace("Group","");m.a.getInstance().then(function(e){return Promise.all([e,e.models[t.state.modelToEdit.modelDefinition.name].get(t.state.modelToEdit.id)])}).then(function(n){var r=g(n,2),i=r[0],a=r[1];t.state.assignedItemStore.setState(a[i.models[e].plural]),t.setState({modelToEdit:a})}).catch(function(t){return l.a.error(t)})}}})}});
//# sourceMappingURL=10-7e8901c1f33f535311da.js.map