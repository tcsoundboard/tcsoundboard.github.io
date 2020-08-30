class Board extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  audio: {
		sound: null,
		soundName: null,
		currentlyPlaying: null } };
  }

  playSound(id) {
	// comment this if statement out to let the clips overlap
	if (this.state.audio.currentlyPlaying) {
	  var snd = this.state.audio.sound;
	  snd.pause();
	}
	// var sound = this.props.sounds.find(sound => {return sound.id === id;});
	var sound = this.props.sounds.find(function(sound){return sound.id === id;});
	var snd = new Audio(sound.soundURL);
	this.setState({ audio: { sound: snd, soundName: sound.soundName, currentlyPlaying: true } });
	snd.play();

	var data = [...this.props.sounds];
	//const index = data.findIndex(obj => obj.soundName === sound.soundName);
	var index = data.findIndex(function(obj){return obj.soundName === sound.soundName});
	data[index].isPlaying = true;
	this.setState(data);

	snd.addEventListener('ended', this.soundListener.bind(this, data, index, snd));
  }

  soundListener(data, index, snd) {
	// const newData = [...data];
	var newData = [...data];
	newData[index].isPlaying = false;
	this.setState(newData);
	snd.removeEventListener('ended', this.soundListener);
  }

  renderSounds() {
// 	return this.props.sounds.map(sound => {
// 	  return React.createElement(Sound, { key: sound.id, sound: sound, audio: this.state.audio, playSound: this.playSound.bind(this) });
// 	});
	return this.props.sounds.map(function(sound) {
	  return React.createElement(Sound, { key: sound.id, sound: sound, audio: this.state.audio, playSound: this.playSound.bind(this) });
	}.bind(this));
  }
  render() {
	return (
	  React.createElement("div", { className: "appContainer" },
	  this.renderSounds()));


  }}
;

class Sound extends React.Component {
  render() {
	var speakerStyle = 'fa fa-volume-off fa-3x';
	if (this.props.sound.isPlaying && this.props.sound.soundName === this.props.audio.soundName && this.props.audio.currentlyPlaying) {
	  speakerStyle += 'fa fa-volume-up fa-3x';
	}
	if (this.props.sound.isNew != null) {
	return (
// 	  React.createElement("div", { className: "sound-card",
// 		onClick: () => this.props.playSound(this.props.sound.id) },
// 	  React.createElement("div", { className: "sound-card-text" }, this.props.sound.soundName)));
	  React.createElement("div", { className: "sound-card",
		onClick: function() {return this.props.playSound(this.props.sound.id) }.bind(this)},
	  React.createElement("div", { className: "sound-card-text" }, this.props.sound.soundName),
	  React.createElement("div", { className: "new-badge" },
	  	React.createElement("img", { src: "assets/new_badge_fill.svg" }))));
	}
	else {
	  return (
	  	React.createElement("div", { className: "sound-card",
		  onClick: function() {return this.props.playSound(this.props.sound.id) }.bind(this)},
	    React.createElement("div", { className: "sound-card-text" }, this.props.sound.soundName)));
	}



  }}


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	  	sounds: [
	  		{ id: 61, soundName: 'TIME CRISIS INTRO (DROP)', soundURL: './sounds/tcintro.mp3', isPlaying: false, isNew: true },
	  	 	{ id: 1, soundName: 'TIME CRISIS INTRO [BEATS 1] (DROP)', soundURL: './sounds/tcintroold.mp3', isPlaying: false },
	  	 	{ id: 2, soundName: '8 MINUTE CAPE COD (DROP)', soundURL: './sounds/8minutecapecod.mp3', isPlaying: false },
	  	 	{ id: 3, soundName: 'SWEET CHILI HEAT® WORLD PREMIERE (DROP)', soundURL: './sounds/tcsweetchilipremiere.mp3', isPlaying: false },
	  	 	{ id: 4, soundName: 'TASTEFUL PALETTE OF THE 1970\'S (DROP)', soundURL: './sounds/tastefulpalette.mp3', isPlaying: false },
			{ id: 5, soundName: 'TIME CRISIS MAILBAG (DROP)', soundURL: './sounds/tcmailbag.mp3', isPlaying: false },
			{ id: 6, soundName: 'JAKE\'S TAKES (DROP)', soundURL: './sounds/jakestakes.mp3', isPlaying: false },
			{ id: 7, soundName: 'CORPORATE FOOD HISTORY (DROP)', soundURL: './sounds/corporatefoodhistory.mp3', isPlaying: false },
			{ id: 8, soundName: 'SEINFELD NUMBER CRUNCH (DROP)', soundURL: './sounds/seinfeldnumbercrunchdrop.mp3', isPlaying: false },
			{ id: 9, soundName: 'TIME CRISIS HOTLINE (DROP)', soundURL: './sounds/tchotline.mp3', isPlaying: false },
			{ id: 10, soundName: 'TIME CRISIS CORRESPON- DENT (DROP)', soundURL: './sounds/tccorrespondent.mp3', isPlaying: false },
			{ id: 11, soundName: 'TOP 5 ON ITUNES (DROP)', soundURL: './sounds/top5itunes.mp3', isPlaying: false },
			{ id: 12, soundName: 'LADY DORITOS TOWN HALL (DROP)', soundURL: './sounds/ladydoritostownhall.mp3', isPlaying: false },
			{ id: 13, soundName: 'ROUGH STUFF (DROP)', soundURL: './sounds/roughstuffdrop.mp3', isPlaying: false },
			{ id: 14, soundName: 'NARCISSISM OF SMALL DIFFERENCES (DROP)', soundURL: './sounds/narcissismdrop.mp3', isPlaying: false },
			{ id: 15, soundName: 'FORM IS EMPTINESS (DROP)', soundURL: './sounds/formisemptinessdrop.mp3', isPlaying: false },
			{ id: 16, soundName: 'NOW I AM BECOME DEATH (DROP)', soundURL: './sounds/nowiambecomedeath.mp3', isPlaying: false },
			{ id: 17, soundName: 'NEW YORK NEWS (DROP)', soundURL: './sounds/newyorknews.mp3', isPlaying: false },
			{ id: 18, soundName: 'TIME CRISIS ENEMIES (DROP)', soundURL: './sounds/tcenemies.mp3', isPlaying: false },
			{ id: 19, soundName: 'THIS IS YOUR SONG (DROP)', soundURL: './sounds/thisisyoursong.mp3', isPlaying: false },
			{ id: 20, soundName: 'LOVE, I DON\'T GET ENOUGH OF IT (DROP)', soundURL: './sounds/loveidontgetenoughofit.mp3', isPlaying: false },
            { id: 57, soundName: 'THIS SHOW RULES (DROP)', soundURL: './sounds/thisshowrulesdrop.mp3', isPlaying: false },
			{ id: 21, soundName: 'THIS SHOW RULES', soundURL: './sounds/thisshowrules.mp3', isPlaying: false },
			{ id: 22, soundName: 'ROUGH STUFF FOLKS', soundURL: './sounds/roughstufffolks.mp3', isPlaying: false },
			{ id: 23, soundName: 'SEINFELD NUMBER CRUNCH', soundURL: './sounds/seinfeldnumbercrunch.mp3', isPlaying: false },
			{ id: 24, soundName: 'ROCK\'S PLAYED OUT, DOG', soundURL: './sounds/rocksplayedout.mp3', isPlaying: false },
			{ id: 25, soundName: 'BUT IN MY NEIGHBOR- HOOD...', soundURL: './sounds/butinmyneighborhood.mp3', isPlaying: false },
			{ id: 26, soundName: 'BUFF TRAFFIC SITCH', soundURL: './sounds/bufftrafficsitch.mp3', isPlaying: false },
			{ id: 27, soundName: 'BRUTAL', soundURL: './sounds/brutal.mp3', isPlaying: false },
			{ id: 28, soundName: 'WELCOME TO MY LIFE', soundURL: './sounds/welcometomylife.mp3', isPlaying: false },
			{ id: 29, soundName: 'BANKIN\' THE EPS', soundURL: './sounds/bankintheeps.mp3', isPlaying: false },
			{ id: 30, soundName: 'BORGESIAN', soundURL: './sounds/borgesian.mp3', isPlaying: false },
			{ id: 31, soundName: 'MASK OFF', soundURL: './sounds/maskoff.mp3', isPlaying: false },
			{ id: 32, soundName: 'DIET COKE: BECAUSE I CAN', soundURL: './sounds/dietcoke.mp3', isPlaying: false },
			{ id: 33, soundName: 'PRETTY TOUGH TONE', soundURL: './sounds/prettytoughtone.mp3', isPlaying: false },
			{ id: 34, soundName: 'SMALL CHARCOAL GRILL', soundURL: './sounds/smallcharcoalgrill.mp3', isPlaying: false },
			{ id: 35, soundName: 'AWFULLY HOT COFFEE POT', soundURL: './sounds/awfullyhotcoffeepot.mp3', isPlaying: false },
			{ id: 36, soundName: 'OHHH!', soundURL: './sounds/boomoh.mp3', isPlaying: false },
			{ id: 37, soundName: 'I\'M A VIBE GUY', soundURL: './sounds/imavibeguy.mp3', isPlaying: false },
			{ id: 38, soundName: 'LONNIE\'S DAD', soundURL: './sounds/lonniesdad.mp3', isPlaying: false },
			{ id: 39, soundName: 'NARCISSISM OF SMALL DIFFERENCE', soundURL: './sounds/narcissismofsmalldifference.mp3', isPlaying: false },
			{ id: 40, soundName: 'STRONG CHOICE', soundURL: './sounds/strongchoice.mp3', isPlaying: false },
			{ id: 41, soundName: 'IT\'S A DUMB TIME TO BE ALIVE', soundURL: './sounds/dumbtimetobealive.mp3', isPlaying: false },
			{ id: 42, soundName: 'THAT\'S A PORTMAN- TEAU', soundURL: './sounds/thatsaportmanteau.mp3', isPlaying: false },
			{ id: 43, soundName: '#THEBIG3 THAT MAKEMEME', soundURL: './sounds/thebig3thatmakememe.mp3', isPlaying: false },
			{ id: 44, soundName: 'WANGS', soundURL: './sounds/wangs.mp3', isPlaying: false },
			{ id: 45, soundName: 'NO FAP SUMMER', soundURL: './sounds/nofapsummer.mp3', isPlaying: false },
			{ id: 46, soundName: 'KIND VIBE', soundURL: './sounds/kindvibe.mp3', isPlaying: false },
			{ id: 47, soundName: 'BUT THIS WAS A FANTASY', soundURL: './sounds/thiswasafantasy.mp3', isPlaying: false },
			{ id: 48, soundName: 'WHAT\'S WRONG WITH BEING FAT?', soundURL: './sounds/whatswrongwithbeingfat.mp3', isPlaying: false },
			{ id: 49, soundName: 'AS A MUSIC INDUSTRY PROFESS- IONAL', soundURL: './sounds/musicindustryprofessional.mp3', isPlaying: false },
			{ id: 50, soundName: 'WHOA, HOLD UP GIRL...', soundURL: './sounds/whoaholdupgirl.mp3', isPlaying: false },
			{ id: 51, soundName: 'AND IT\'S EASY TO SEE', soundURL: './sounds/anditseasytosee.mp3', isPlaying: false },
			{ id: 52, soundName: 'DOWN MEXICO WAY', soundURL: './sounds/downmexicoway.mp3', isPlaying: false },
			{ id: 53, soundName: 'FRICKIN RANDOM', soundURL: './sounds/frickinrandom.mp3', isPlaying: false },
			{ id: 54, soundName: 'WHAT ABOUT VAMPIRE, MAN?', soundURL: './sounds/whataboutvampireman.mp3', isPlaying: false },
            { id: 55, soundName: 'TIME CRISIS, IN A TIME... OF CRISIS', soundURL: './sounds/inatimeofcrisis.mp3', isPlaying: false },
            { id: 56, soundName: 'STRANGE AND UNCERTAIN TIMES', soundURL: './sounds/strangeanduncertaintimes.mp3', isPlaying: false },
			{ id: 58, soundName: 'DO YOU PLAY WORDS WITH FRIENDS?', soundURL: './sounds/wordswithfriends.mp3', isPlaying: false },
			{ id: 59, soundName: 'GUACAMOLE TECHNOLOGY', soundURL: './sounds/guacamoletechnology.mp3', isPlaying: false, isNew: true },
			{ id: 60, soundName: 'DAMN, HE WENT NUCLEAR', soundURL: './sounds/hewentnuclear.mp3', isPlaying: false, isNew: true },
	  	]};


  }
  render() {
	return (
	  React.createElement("div", null,
	  React.createElement(Board, { sounds: this.state.sounds, audio: this.state.audio })));


  }}
;

ReactDOM.render(React.createElement(App, null), document.getElementById('soundboard'));
