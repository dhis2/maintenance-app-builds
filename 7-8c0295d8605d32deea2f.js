webpackJsonp([7],{1970:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=n.n(i),s=n(400),a=n.n(s),o=n(241),l=n.n(o),u=n(785),c=n.n(u),d=n(2512),m=n(2511);t.default=r.a.createClass({displayName:"GroupEditor.component",render:function(){return r.a.createElement(c.a,null,r.a.createElement(a.a,{onChange:this._tabChanged},r.a.createElement(l.a,{label:"Manage items in group"},r.a.createElement(d.a,{ref:"itemsForGroup"})),r.a.createElement(l.a,{label:"Manage groups for item"},r.a.createElement(m.a,{ref:"groupsForItem"}))))},_tabChanged:function(){this.refs.itemsForGroup.reset(),this.refs.groupsForItem.reset()}})},1986:function(e,t,n){"use strict";var i=n(0),r=(n.n(i),n(1)),s=n.n(r),a={contextTypes:{d2:s.a.object.isRequired},getTranslation:function(e){return this.context.d2.i18n.getTranslation(e)}};t.a=a},1991:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),o=n.n(a),l=n(1),u=n.n(l),c=n(785),d=n.n(c),m=n(781),h=n.n(m),f=n(24),g=(n.n(f),n(782)),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();f.config.i18n.strings.add("selected"),f.config.i18n.strings.add("assign_all"),f.config.i18n.strings.add("remove_all"),f.config.i18n.strings.add("hidden_by_filters");var v=function(e){function t(e,n){i(this,t);var s=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));s.state={selectedLeft:0,selectedRight:0,loading:!0},s.onAssignItems=function(){s.setState({loading:!0}),s.props.onAssignItems([].map.call(s.leftSelect.selectedOptions,function(e){return e.value})).then(function(){s.clearSelection(),s.setState({loading:!1})}).catch(function(){s.setState({loading:!1})})},s.onRemoveItems=function(){s.setState({loading:!0}),s.props.onRemoveItems([].map.call(s.rightSelect.selectedOptions,function(e){return e.value})).then(function(){s.clearSelection(),s.setState({loading:!1})}).catch(function(){s.setState({loading:!1})})},s.onAssignAll=function(){s.setState({loading:!0}),s.props.onAssignItems([].map.call(s.leftSelect.options,function(e){return e.value})).then(function(){s.clearSelection(),s.setState({loading:!1})}).catch(function(){s.setState({loading:!1})})},s.onRemoveAll=function(){s.setState({loading:!0}),s.props.onRemoveItems([].map.call(s.rightSelect.options,function(e){return e.value})).then(function(){s.clearSelection(),s.setState({loading:!1})}).catch(function(){s.setState({loading:!1})})},s.byAssignedItemsOrder=function(e,t){var n=s.props.assignedItemStore.state;return Array.isArray(n)?n.indexOf(e.value)>n.indexOf(t.value)?1:-1:0};var a=s.context.d2.i18n;return s.getTranslation=a.getTranslation.bind(a),s}return s(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this;this.disposables=[],this.disposables.push(this.props.itemStore.subscribe(function(t){return e.setState({loading:!t})})),this.disposables.push(this.props.assignedItemStore.subscribe(function(){return e.forceUpdate()}))}},{key:"componentWillReceiveProps",value:function(e){e.hasOwnProperty("filterText")&&this.leftSelect&&this.rightSelect&&this.setState({selectedLeft:[].filter.call(this.leftSelect.selectedOptions,function(t){return-1!==t.text.toLowerCase().indexOf((""+e.filterText).trim().toLowerCase())}).length,selectedRight:[].filter.call(this.rightSelect.selectedOptions,function(t){return-1!==t.text.toLowerCase().indexOf((""+e.filterText).trim().toLowerCase())}).length})}},{key:"componentWillUnmount",value:function(){this.disposables.forEach(function(e){e.unsubscribe()})}},{key:"getItemStoreIsCollection",value:function(){return void 0!==this.props.itemStore.state&&"function"==typeof this.props.itemStore.state.values&&"function"==typeof this.props.itemStore.state.has}},{key:"getItemStoreIsArray",value:function(){return void 0!==this.props.itemStore.state&&"Array"===this.props.itemStore.state.constructor.name}},{key:"getAssignedItemStoreIsCollection",value:function(){return void 0!==this.props.assignedItemStore.state&&"function"==typeof this.props.assignedItemStore.state.values&&"function"==typeof this.props.assignedItemStore.state.has}},{key:"getAssignedItemStoreIsArray",value:function(){return void 0!==this.props.assignedItemStore.state&&"Array"===this.props.assignedItemStore.state.constructor.name}},{key:"getAllItems",value:function(){return this.getItemStoreIsCollection()?Array.from(this.props.itemStore.state.values()).map(function(e){return{value:e.id,text:e.name}}):this.props.itemStore.state||[]}},{key:"getItemCount",value:function(){return this.getItemStoreIsCollection()&&this.props.itemStore.state.size||this.getItemStoreIsArray()&&this.props.itemStore.state.length||0}},{key:"getIsValueAssigned",value:function(e){return this.getAssignedItemStoreIsCollection()?this.props.assignedItemStore.state.has(e):this.props.assignedItemStore.state&&-1!==this.props.assignedItemStore.state.indexOf(e)}},{key:"getAssignedItems",value:function(){var e=this;return this.getAllItems().filter(function(t){return e.getIsValueAssigned(t.value)})}},{key:"getAvailableItems",value:function(){var e=this;return this.getAllItems().filter(function(t){return!e.getIsValueAssigned(t.value)})}},{key:"getAllItemsFiltered",value:function(){return this.filterItems(this.getAllItems())}},{key:"getAssignedItemsFiltered",value:function(){return this.filterItems(this.getAssignedItems())}},{key:"getAvailableItemsFiltered",value:function(){return this.filterItems(this.getAvailableItems())}},{key:"getAssignedItemsCount",value:function(){return this.getAssignedItems().length}},{key:"getAvailableItemsCount",value:function(){return this.getAvailableItems().length}},{key:"getAssignedItemsFilterCount",value:function(){return 0===this.getFilterText().length?0:this.getAssignedItems().length-this.getAssignedItemsFiltered().length}},{key:"getAvailableItemsFilterCount",value:function(){return 0===this.getFilterText().length?0:this.getAvailableItems().length-this.getAvailableItemsFiltered().length}},{key:"getAssignedItemsUnfilteredCount",value:function(){return 0===this.getFilterText().length?this.getAssignedItemsCount():this.getAssignedItemsCount()-this.getAssignedItemsFilterCount()}},{key:"getAvailableItemsUnfilteredCount",value:function(){return 0===this.getFilterText().length?this.getAvailableItemsCount():this.getAvailableItemsCount()-this.getAvailableItemsFilterCount()}},{key:"getFilterText",value:function(){return this.props.filterText?this.props.filterText.trim().toLowerCase():""}},{key:"getAvailableSelectedCount",value:function(){return Math.max(this.state.selectedLeft,0)}},{key:"getAssignedSelectedCount",value:function(){return Math.max(this.state.selectedRight,0)}},{key:"getSelectedCount",value:function(){return Math.max(this.getAvailableSelectedCount(),this.getAssignedSelectedCount())}},{key:"getSelectedItems",value:function(){return[].map.call(this.rightSelect.selectedOptions,function(e){return e.value})}},{key:"clearSelection",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e&&(this.leftSelect.selectedIndex=-1),t&&(this.rightSelect.selectedIndex=-1),this.setState(function(n){return{selectedLeft:e?0:n.selectedLeft,selectedRight:t?0:n.selectedRight}})}},{key:"filterItems",value:function(e){var t=this;return e.filter(function(e){return 0===t.getFilterText().length||-1!==e.text.trim().toLowerCase().indexOf(t.getFilterText())})}},{key:"render",value:function(){var e=this,t=this.getFilterText().length>0?15:0,n={container:{display:"flex",marginTop:16,marginBottom:32,height:this.props.height+"px"},left:{flex:"1 0 120px"},middle:{flex:"0 0 120px",alignSelf:"center",textAlign:"center"},right:{flex:"1 0 120px"},paper:{width:"100%",height:"100%"},select:{width:"100%",minHeight:"50px",height:this.props.height-t+"px",border:"none",fontFamily:"Roboto",fontSize:13,outline:"none"},options:{padding:".25rem .5rem"},buttons:{minWidth:"100px",maxWidth:"100px",marginTop:"8px"},selected:{fontSize:13,minHeight:"15px",marginTop:"45px",padding:"0 8px"},status:{marginTop:"8px",minHeight:"60px"},hidden:{fontSize:13,color:"#404040",fontStyle:"italic",textAlign:"center",width:"100%",background:"#d0d0d0",maxHeight:"15px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},i=function(t){e.clearSelection(!1,!0),e.setState({selectedLeft:t.target.selectedOptions.length})},r=function(t){e.clearSelection(!0,!1),e.setState({selectedRight:t.target.selectedOptions.length})},s=function(t){return e.getItemCount()>0&&e.getFilterText().length>0?t+" "+e.getTranslation("hidden_by_filters"):""};return o.a.createElement("div",{style:n.container},o.a.createElement("div",{style:n.left},o.a.createElement(d.a,{style:n.paper},o.a.createElement("div",{style:n.hidden},s(this.getAvailableItemsFilterCount())),o.a.createElement("select",{multiple:!0,style:n.select,onChange:i,ref:function(t){e.leftSelect=t}},this.getAvailableItemsFiltered().map(function(t){return o.a.createElement("option",{key:t.value,value:t.value,onDoubleClick:e.onAssignItems,style:n.options},t.text)}))),o.a.createElement(h.a,{label:this.getTranslation("assign_all")+" "+(0===this.getAvailableItemsUnfilteredCount()?"":this.getAvailableItemsUnfilteredCount())+" →",disabled:this.state.loading||0===this.getAvailableItemsUnfilteredCount(),onClick:this.onAssignAll,style:{marginTop:"1rem"},secondary:!0})),o.a.createElement("div",{style:n.middle},o.a.createElement("div",{style:n.selected},function(){return e.getSelectedCount()>0?e.getSelectedCount()+" "+e.getTranslation("selected"):""}()),o.a.createElement(h.a,{label:"→",secondary:!0,onClick:this.onAssignItems,style:n.buttons,disabled:this.state.loading||0===this.state.selectedLeft}),o.a.createElement(h.a,{label:"←",secondary:!0,onClick:this.onRemoveItems,style:n.buttons,disabled:this.state.loading||0===this.state.selectedRight}),o.a.createElement("div",{style:n.status},this.state.loading?o.a.createElement(g.a,{small:!0,style:{width:60,height:60}}):void 0)),o.a.createElement("div",{style:n.right},o.a.createElement(d.a,{style:n.paper},o.a.createElement("div",{style:n.hidden},s(this.getAssignedItemsFilterCount())),o.a.createElement("select",{multiple:!0,style:n.select,onChange:r,ref:function(t){e.rightSelect=t}},this.getAssignedItemsFiltered().sort(this.byAssignedItemsOrder).map(function(t){return o.a.createElement("option",{key:t.value,value:t.value,onDoubleClick:e.onRemoveItems,style:n.options},t.text)}))),o.a.createElement(h.a,{label:"← "+this.getTranslation("remove_all")+" "+(this.getAssignedItemsUnfilteredCount()>0?this.getAssignedItemsUnfilteredCount():""),style:{float:"right",marginTop:"1rem"},disabled:this.state.loading||0===this.getAssignedItemsUnfilteredCount(),onClick:this.onRemoveAll,secondary:!0})))}}]),t}(a.Component);v.propTypes={itemStore:u.a.object.isRequired,assignedItemStore:u.a.object.isRequired,filterText:u.a.string,onAssignItems:u.a.func.isRequired,onRemoveItems:u.a.func.isRequired,onMoveItems:u.a.func,height:u.a.number},v.contextTypes={d2:u.a.object},v.defaultProps={height:500,filterText:"",onMoveItems:function(){}},t.a=v},2417:function(e,t,n){"use strict";var i=n(0),r=n.n(i),s=n(788),a=n.n(s),o=n(234),l=n.n(o);t.a=r.a.createClass({displayName:"ItemSelector.component",propTypes:{itemListStore:r.a.PropTypes.object.isRequired,onItemSelected:r.a.PropTypes.func.isRequired},getInitialState:function(){return{items:[]}},componentWillMount:function(){var e=this;this.subscription=this.props.itemListStore.map(function(e){return e.map(function(e){return{text:e.displayName,payload:e.id,model:e}})}).subscribe(function(t){t.length&&e.props.onItemSelected(t[0].model),e.setState({items:t})})},componentWillUnmount:function(){this.subscription&&this.subscription.unsubscribe&&this.subscription.unsubscribe()},renderOptions:function(){return this.state.items.map(function(e,t){return r.a.createElement(l.a,{key:t,primaryText:e.text,value:e.payload})})},render:function(){return r.a.createElement("div",null,r.a.createElement(a.a,{onChange:this._onChange,value:this.props.value&&this.props.value.id,fullWidth:!0},this.renderOptions()))},_onChange:function(e,t,n){this.state.items&&this.state.items[t]&&this.props.onItemSelected(this.state.items[t].model)}})},2418:function(e,t,n){"use strict";function i(e){return function(t){return 0===e.length||-1!==e.indexOf(t.name)}}var r=n(0),s=n.n(r),a=n(788),o=n.n(a),l=n(234),u=n.n(l),c=n(24),d=n.n(c),m=n(123),h=n.n(m),f=n(1986),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.a=s.a.createClass({displayName:"ModelTypeSelector.component",propTypes:{nameListFilter:s.a.PropTypes.arrayOf(s.a.PropTypes.string),onChange:s.a.PropTypes.func.isRequired},mixins:[f.a],getDefaultProps:function(){return{nameListFilter:[]}},getInitialState:function(){return{selectedModel:null}},componentWillMount:function(){var e=this;d.a.getInstance().then(function(t){return e.setState({models:t.models})})},_onChange:function(e,t,n){this.setState({selectedModel:n}),this.props.onChange(n)},renderOptions:function(){var e=this;return this.state&&this.state.models?this.state.models.mapThroughDefinitions(function(e){return e}).filter(i(this.props.nameListFilter)).map(function(t){return{text:e.getTranslation(h()(t.plural)),payload:t}}).map(function(e,t){return s.a.createElement(u.a,{key:t,primaryText:e.text,value:e.payload})}):[]},render:function(){return s.a.createElement("div",null,s.a.createElement(o.a,g({value:this.state.selectedModel,hintText:this.getTranslation("select_an_object_type"),fullWidth:!0},this.props,{onChange:this._onChange}),this.renderOptions()))}})},2511:function(e,t,n){"use strict";var i=n(0),r=n.n(i),s=n(780),a=n.n(s),o=n(23),l=n.n(o),u=n(24),c=n.n(u),d=n(2418),m=n(48),h=n(2417),f=n(1986),g=n(1991),p=function(){function e(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{!i&&o.return&&o.return()}finally{if(r)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.a=r.a.createClass({displayName:"GroupsForItemManager.component",mixins:[f.a],getInitialState:function(){var e=m.a.create(),t=m.a.create(),n=m.a.create();return e.state=[],t.state=[],{itemListStore:n,itemStore:e,assignedItemStore:t,filterText:"",showGroupEditor:!1}},renderGroupEditor:function(){return this.state.showGroupEditor?r.a.createElement("div",null,r.a.createElement(h.a,{value:this.state.modelToEdit||this.state.itemListStore.state[0],itemListStore:this.state.itemListStore,onItemSelected:this._workItemChanged}),r.a.createElement(a.a,{fullWidth:!0,hintText:this.getTranslation("search_available_selected_items"),defaultValue:this.state.filterText,onChange:this._setFilterText}),r.a.createElement(g.a,{itemStore:this.state.itemStore,assignedItemStore:this.state.assignedItemStore,onAssignItems:this._assignItems,onRemoveItems:this._removeItems,filterText:this.state.filterText})):[]},render:function(){var e={padding:"2rem"},t=this.context.d2,n=["indicator","dataElement","categoryOption"].filter(function(e){return t.currentUser.canCreate(t.models[e+"Group"])});return r.a.createElement("div",{style:e},r.a.createElement(d.a,{nameListFilter:n,onChange:this._typeChanged}),this.renderGroupEditor())},createUrls:function(e){var t=this.state,n=t.modelToEdit,i=t.itemDefinition;return e.map(function(e){return n.modelDefinition.plural+"/"+n.id+"/"+i+"/"+e})},_assignItems:function(e){var t=this,n=this.createUrls(e).map(function(e){return c.a.getInstance().then(function(e){return e.Api.getApi()}).then(function(t){return t.post(e)})});return Promise.all(n).then(function(){var e=t.state.modelToEdit.modelDefinition.name+"Group";return c.a.getInstance().then(function(e){return Promise.all([e,e.models[t.state.modelToEdit.modelDefinition.name].get(t.state.modelToEdit.id)])}).then(function(n){var i=p(n,2),r=i[0],s=i[1];t.state.assignedItemStore.setState(s[r.models[e].plural]),t.setState({modelToEdit:s})})}).catch(function(e){return l.a.error(e)})},_removeItems:function(e){var t=this,n=this.createUrls(e).map(function(e){return c.a.getInstance().then(function(e){return e.Api.getApi()}).then(function(t){return t.delete(e)})});return Promise.all(n).then(function(){var e=t.state.modelToEdit.modelDefinition.name+"Group";return c.a.getInstance().then(function(e){return Promise.all([e,e.models[t.state.modelToEdit.modelDefinition.name].get(t.state.modelToEdit.id)])}).then(function(n){var i=p(n,2),r=i[0],s=i[1];t.state.assignedItemStore.setState(s[r.models[e].plural]),t.setState({modelToEdit:s})})}).catch(function(e){return l.a.error(e)})},_typeChanged:function(e){var t=this;e.list({paging:!1,fields:"id,displayName,name"}).then(function(e){return e.toArray()}).then(function(e){return t.state.itemListStore.setState(e)}).then(function(){return t.setState({showGroupEditor:!0})}).catch(function(e){return l.a.error(e)})},_setFilterText:function(e){this.setState({filterText:e.target.value})},_workItemChanged:function(e){var t=this,n=e.modelDefinition.name+"Group";c.a.getInstance().then(function(i){if(!i.models[n])return Promise.reject("This groupType does not have a model named: "+n);var r=i.models[n].list({paging:!1}),s=i.models[e.modelDefinition.name].get(e.id);Promise.all([r,s]).then(function(e){var r=p(e,2),s=r[0],a=r[1];t.state.itemStore.setState(s),t.state.assignedItemStore.setState(a[i.models[n].plural]),t.setState({modelToEdit:a,itemDefinition:i.models[n].plural})})}).catch(function(e){return l.a.error(e)})},reset:function(){var e=this;if(this.state.modelToEdit){var t=this.state.modelToEdit.modelDefinition.name+"Group";c.a.getInstance().then(function(t){return Promise.all([t,t.models[e.state.modelToEdit.modelDefinition.name].get(e.state.modelToEdit.id)])}).then(function(n){var i=p(n,2),r=i[0],s=i[1];e.state.assignedItemStore.setState(s[r.models[t].plural]),e.setState({modelToEdit:s})}).catch(function(e){return l.a.error(e)})}}})},2512:function(e,t,n){"use strict";var i=n(0),r=n.n(i),s=n(780),a=n.n(s),o=n(23),l=n.n(o),u=n(24),c=n.n(u),d=n(2418),m=n(48),h=n(2417),f=n(1986),g=n(1991),p=function(){function e(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{!i&&o.return&&o.return()}finally{if(r)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.a=r.a.createClass({displayName:"ItemsInGroupManager.component",mixins:[f.a],contextTypes:{d2:r.a.PropTypes.object},getInitialState:function(){var e=m.a.create(),t=m.a.create(),n=m.a.create();return e.state=[],t.state=[],{itemListStore:n,itemStore:e,assignedItemStore:t,filterText:"",showGroupEditor:!1}},renderGroupEditor:function(){return this.state.showGroupEditor?r.a.createElement("div",null,r.a.createElement(h.a,{value:this.state.modelToEdit||this.state.itemListStore.state[0],itemListStore:this.state.itemListStore,onItemSelected:this._workItemChanged}),r.a.createElement(a.a,{fullWidth:!0,hintText:this.getTranslation("search_available_selected_items"),defaultValue:this.state.filterText,onChange:this._setFilterText}),r.a.createElement(g.a,{itemStore:this.state.itemStore,assignedItemStore:this.state.assignedItemStore,onAssignItems:this._assignItems,onRemoveItems:this._removeItems,filterText:this.state.filterText})):null},createUrls:function(e){var t=this.state,n=t.modelToEdit,i=t.itemDefinition;return e.map(function(e){return n.modelDefinition.plural+"/"+n.id+"/"+i+"/"+e})},render:function(){var e=this.context.d2,t=["indicatorGroup","dataElementGroup","categoryOptionGroup"].filter(function(t){return e.currentUser.canCreate(e.models[t])}),n={padding:"2rem"};return r.a.createElement("div",{style:n},r.a.createElement(d.a,{nameListFilter:t,onChange:this._typeChanged}),this.renderGroupEditor())},_assignItems:function(e){var t=this,n=this.createUrls(e).map(function(e){return c.a.getInstance().then(function(e){return e.Api.getApi()}).then(function(t){return t.post(e)})});return Promise.all(n).then(function(){var e=t.state.modelToEdit.modelDefinition.name.replace("Group","");return c.a.getInstance().then(function(e){return Promise.all([e,e.models[t.state.modelToEdit.modelDefinition.name].get(t.state.modelToEdit.id)])}).then(function(n){var i=p(n,2),r=i[0],s=i[1];t.state.assignedItemStore.setState(s[r.models[e].plural]),t.setState({modelToEdit:s})}).catch(function(e){return l.a.error(e)})})},_removeItems:function(e){var t=this,n=this.createUrls(e).map(function(e){return c.a.getInstance().then(function(e){return e.Api.getApi()}).then(function(t){return t.delete(e)})});return Promise.all(n).then(function(){var e=t.state.modelToEdit.modelDefinition.name.replace("Group","");return c.a.getInstance().then(function(e){return Promise.all([e,e.models[t.state.modelToEdit.modelDefinition.name].get(t.state.modelToEdit.id)])}).then(function(n){var i=p(n,2),r=i[0],s=i[1];t.state.assignedItemStore.setState(s[r.models[e].plural]),t.setState({modelToEdit:s})}).catch(function(e){return l.a.error(e)})})},_typeChanged:function(e){var t=this;e&&e.list({paging:!1,fields:"id,displayName,name"}).then(function(e){return e.toArray()}).then(function(e){return t.state.itemListStore.setState(e)}).then(function(){return t.setState({showGroupEditor:!0})}).catch(function(e){return l.a.error(e)})},_setFilterText:function(e){this.setState({filterText:e.target.value})},_workItemChanged:function(e){var t=this,n=e.modelDefinition.name.replace("Group","");c.a.getInstance().then(function(i){if(!i.models[n])return Promise.reject("This groupType does not have a model named: "+n);var r=i.models[n].list({paging:!1}),s=i.models[e.modelDefinition.name].get(e.id);Promise.all([r,s]).then(function(e){var r=p(e,2),s=r[0],a=r[1];t.state.itemStore.setState(s),t.state.assignedItemStore.setState(a[i.models[n].plural]),t.setState({modelToEdit:a,itemDefinition:i.models[n].plural})})}).catch(function(e){return l.a.error(e)})},reset:function(){var e=this;if(this.state.modelToEdit){var t=this.state.modelToEdit.modelDefinition.name.replace("Group","");c.a.getInstance().then(function(t){return Promise.all([t,t.models[e.state.modelToEdit.modelDefinition.name].get(e.state.modelToEdit.id)])}).then(function(n){var i=p(n,2),r=i[0],s=i[1];e.state.assignedItemStore.setState(s[r.models[t].plural]),e.setState({modelToEdit:s})}).catch(function(e){return l.a.error(e)})}}})}});
//# sourceMappingURL=7-8c0295d8605d32deea2f.js.map