"use strict";
var XvelopersList = React.createClass({
  getInitialState: function() {
    return {xvelopers: []};
  },
  componentDidMount: function(){
    var self = this;
    $.get('./xvelopers.json?v=XVELOPERSAPP_CURRENT_VERSION', function(data) {
      data.sort(function(a,b){
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      });
      self.setState({xvelopers:data});
    });
  },
  render: function(){
    var renderXveloper = function(xveloper){
      var renderLinks = function(link){
        var className = "uk-icon-button "+link.icon+ " uk-margin-small-right";
        return (
          <a href={link.url} className={className} target="_blank"></a>
        );
      };
      function xveloperDescription() {
        if(xveloper.description.length > 100){
          var stringLength = 50;
          if(xveloper.description.indexOf("<a") > -1 && xveloper.description.indexOf("<a") <= stringLength){
            stringLength = xveloper.description.indexOf("<a");
          }
          var shown_part = xveloper.description.substr(0,stringLength);
          var hidden_part = "<span class='uk-hidden' id='"+xveloper.id+"-more'>" + xveloper.description.substr(stringLength) + "</span>";
          var showm_more_btn = " <small> <a href='#' data-uk-toggle=\"{target:'#"+xveloper.id+"-more'}\">mostrar más</a> </small>";
          xveloper.description = shown_part+hidden_part+showm_more_btn;
        }
        return {__html: xveloper.description};
      }
      return (
        <div className="uk-width-medium-1-4 uk-text-center uk-margin-top" id="{xveloper.id}">
            <div className="uk-thumbnail uk-overlay-hover uk-border-circle" >
              <figure className="uk-overlay">
                <img className="uk-border-circle" width="240" height="240" src={xveloper.image} />
                <figcaption className="uk-overlay-panel uk-overlay-background uk-flex uk-flex-center uk-flex-middle uk-text-center uk-border-circle">
                  <div>
                    {xveloper.links.map(renderLinks)}
                  </div>
                </figcaption>
              </figure>
            </div>
            <h3 className="uk-margin-bottom-remove">{xveloper.name}</h3>
            <p className="uk-text-large uk-margin-top-remove uk-text-muted" dangerouslySetInnerHTML={xveloperDescription()}></p>
          </div>
      );
    };
    if(this.state.xvelopers.length > 0){
      var renderedXvelopers = this.state.xvelopers.map(renderXveloper);
      return (
        <div className="uk-grid" >{renderedXvelopers}</div>
      );
    }else{
      return (
        <div className="uk-grid">Cargando la lista ...</div>
      );
    }
  }
});

ReactDOM.render(<XvelopersList />, document.getElementById("root"));
