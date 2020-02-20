/*!!!!!!!!!!!Do not change anything between here (the DRIVERNAME placeholder will be automatically replaced at buildtime)!!!!!!!!!!!*/
// https://github.com/rancher/ui/blob/master/lib/shared/addon/mixins/cluster-driver.js
import ClusterDriver from 'shared/mixins/cluster-driver';

// do not remove LAYOUT, it is replaced at build time with a base64 representation of the template of the hbs template
// we do this to avoid converting template to a js file that returns a string and the cors issues that would come along with that
const LAYOUT;
/*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/


/*!!!!!!!!!!!GLOBAL CONST START!!!!!!!!!!!*/
// EMBER API Access - if you need access to any of the Ember API's add them here in the same manner rather then import them via modules, since the dependencies exist in rancher we dont want to expor the modules in the amd def
const computed = Ember.computed;
const equal = Ember.computed.equal;
const observer = Ember.observer;
const get = Ember.get;
const set = Ember.set;
const setProperties = Ember.setProperties;
const alias = Ember.computed.alias;
const service = Ember.inject.service;
const all = Ember.RSVP.all;
const next = Ember.run.next;


/* !!!!!!!!!!!GLOBAL CONST END!!!!!!!!!!!*/

const regionMap = {
  'Mumbai':    'ap-mumbai-1',
  'Seoul':     'ap-seoul-1',
  'Tokyo':     'ap-tokyo-1',
  'Toronto':   'ca-toronto-1',
  'Frankfurt': 'eu-frankfurt-1',
  'Zurich':    'eu-zurich-1',
  'Sao Paolo': 'sa-saopaulo-1',
  'London':    'uk-london-1',
  'Ashburn':   'us-ashburn-1',
  'Phoenix':   'us-phoenix-1',
}

const k8sVersionMap = {
  'v1.15.7': 'v1.15.7', // default
  'v1.14.8': 'v1.14.8',
  'v1.13.5': 'v1.13.5',
}

const vcnIdMap = { quick: 'Quick Create', }

const subnetAccessMap = { public: 'Public', private: 'Private', }

const nodeShapeMap = {
  'VM.Standard1.1':    'VM.Standard1.1',
  'VM.Standard1.2':    'VM.Standard1.2',
  'VM.Standard1.4':    'VM.Standard1.4',
  'VM.Standard1.8':    'VM.Standard1.8',
  'VM.Standard1.16':   'VM.Standard1.16',
  'VM.Standard2.1':    'VM.Standard2.1',
  'VM.Standard2.2':    'VM.Standard2.2',
  'VM.Standard2.4':    'VM.Standard2.4',
  'VM.Standard2.8':    'VM.Standard2.8',
  'VM.Standard2.16':   'VM.Standard2.16',
  'VM.Standard2.24':   'VM.Standard2.24',
  'BM.Standard.E2.64': 'BM.Standard.E2.64',
  'BM.Standard2.52':   'BM.Standard2.52',
  'BM.Standard.B1.44': 'BM.Standard.B1.44',
  'BM.DenseIO2.52':    'BM.DenseIO2.52',
  'BM.HPC2.36':        'BM.HPC2.36',
  'VM.Standard.E2.1.Micro':  'VM.Standard.E2.1.Micro',
  'VM.Standard.E2.2':  'VM.Standard.E2.2',
  'VM.GPU2.1':         'VM.GPU2.1',
  'VM.GPU2.2':         'VM.GPU2.2',
  'VM.GPU3.1':         'VM.GPU3.1',
  'VM.GPU3.2':         'VM.GPU3.2',
  'VM.GPU3.4':         'VM.GPU3.4',
  'VM.GPU3.4':         'VM.GPU3.8',
}

const imageMap = {
  'Oracle-Linux-7.6': 'Oracle-Linux-7.6',
  'Oracle-Linux-7.5': 'Oracle-Linux-7.5',
  'Oracle-Linux-7.4': 'Oracle-Linux-7.4',
}

const languages = {
  'en-us': {
    'clusterNew': {
      'oke': {
        'access': {
          'next':    'Next: Authenticate & Configure Cluster',
          'loading': 'Loading values from Oracle Cloud Infrastructure',
          'title':   'OCI Account Configuration',
          'detail':  'Choose the region and API Key that will be used to authenticate and configure Oracle Container Engine.'
        },
        'region':      { 'label': 'Region' },
        'tenancyOCID': {
          'label':       'Tenancy OCID',
          'placeholder': 'The OCID of the tenancy in which to create resources',
          'required':    'Tenancy OCID is required'
        },
        'compartmentOCID': {
          'label':       'Compartment OCID',
          'placeholder': 'The OCID of the compartment in which to create the resources',
          'required':    'Compartment OCID is required'
        },
        'userOcid': {
          'label':       'User OCID',
          'placeholder': 'The OCID of a user who has access to the specified tenancy/compartment',
          'required':    'Tenancy OCID is required'
        },
        'userFingerprint': {
          'label':       'User fingerprint',
          'placeholder': "The fingerprint corresponding to the specified user's private API Key",
          'required':    'User private key fingerprint is required'
        },
        'secretKey': {
          'label':       'User Private Key',
          'placeholder': 'The private API key contents for the specified OCI user, in PEM format',
          'provided':    'Provided',
          'required':    'User Private API Key is required'
        },
        'secretKeyPassphrase': {
          'label':       'User Private Key Passphrase',
          'placeholder': 'The passphrase (if any) that protects private key file the specified OCI user',
          'provided':    'Provided'
        },
        'cluster': {
          'title':   'Cluster Configuration',
          'detail':  'Choose the Kubernetes version and the number of nodes per subnet for the cluster.',
          'next':    'Next: Configure Virtual Cloud Network',
          'loading': 'Loading VCNs from Oracle Cloud Infrastructure'
        },
        'vcn': {
          'title':    'Virtual Cloud Network',
          'detail':   'Configure the virtual cloud network that will be used for your Kubernetes cluster.',
          'label':    'Virtual Cloud Network',
          'required': 'VCN is required'
        },
        'version': {
          'label':    'Kubernetes Version',
          'required': 'Kubernetes Version is required'
        },
        'cidr': {
          'label':       'Virtual Cloud Network CIDR',
          'placeholder': 'e.g. 172.16.0.0/16',
          'required':    'Virtual Cloud Network CIDR is required',
          'error':       'Virtual Cloud CIDR format error',
        },
        'existingVCNDetails': {
          'compartmentOCID':            'OCID of the VCN\'s compartment',
          'compartmentOCIDPlaceholder': 'e.g. ocid1.compartment.oc1..aaaaaaaa...',
          'compartmentOCIDHelp':        'leave blank if it\'s the cluster compartment',
          'vcnName':                    'Name of the pre-existing VCN',
          'vcnNamePlaceholder':         'e.g. my-vcn',
          'lbSubnetName1':              'Name of first pre-existing LB subnet',
          'lbSubnetName1Placeholder':   'e.g. my-lb-sub-1',
          'lbSubnetName2':              'Name of second pre-existing LB subnet (if applicable)',
          'lbSubnetName2Placeholder':   'e.g. my-lb-sub-2',
        },
        'quantityPerSubnet': {
          'label':       'Nodes Per Subnet Count',
          'placeholder': 'e.g. 1',
          'required':    'Nodes per subnet is required',
          'help':        'The quantity of nodes nodes to run in each worker subnet',
          'error':       'The count of nodes should not be greater than {max}'
        },
        'nodeShape': {
          'label':    'Instance Shape',
          'required': 'Instance Shape is required'
        },
        'nodeSSHKey': {
          'label':       'SSH public key for nodes',
          'placeholder': 'Optional SSH public key for the nodes',
        },
        'instanceConfig': {
          'label':    'Instance Configuration(CPU/Memory)',
          'gpuLabel': 'Instance Configuration(CPU/Memory/GPU Type/GPU Count)',
          'required': 'Instance Configuration is required'
        },
        'subnet': {
          'label':    'Subnet Access',
          'required': 'Subnet access is required'
        },
        'node': {
          'title':   'Node Type',
          'detail':  'Choose the node type that will be used for this Kubernetes cluster',
          'next':    'Next: Configure Node Instances',
          'loading': 'Loading configuration from Oracle Cloud Infrastructure'
        },
        'instance': {
          'title':  'Node Instance Configuration',
          'detail': 'Configure the instance that will be used as nodes in the cluster.'
        },
        'os':          { 'label': 'Operating System' },
        'storageType': { 'label': 'Default Persistent Volume Disk Type' },
        'storageSize': {
          'label':       'Default Persistent Volume Disk Size',
          'placeholder': 'e.g. 10',
          'error':       'Default Persistent Volume Disk Size should be greater than 0'
        },
        'localDisk': {
          'label':       'Local Disk',
          'placeholder': '{size} GB(Self-selection is not supported for the time being)'
        },
        'subnetAccessOptions': {
          'quick':    'Quick Create',
          'custom':   'Custom Create',
          'existing': 'Existing',

        }
      }
    }
  },
};

/* !!!!!!!!!!!DO NOT CHANGE START!!!!!!!!!!!*/
export default Ember.Component.extend(ClusterDriver, {
  // 'okeEngineConfig googleKubernetesEngineConfig'
  app:            service(),
  router:         service(),
  session:        service(),
  /* !!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/
  intl:           service(),
  driverName:     '%%DRIVERNAME%%',
  configField:    '%%DRIVERNAME%%EngineConfig',
  layout:         null,
  versionChoices: [],
  clusterQuota:   null,
  imageChioces:   [],
  allImages:      [],
  zoneResource:   null,
  instanceConfig:  '',
  step:            1,
  lanChanged:      null,
  refresh:         false,
  vcnCreationMode: '',

  isNew:   equal('mode', 'new'),
  editing: equal('mode', 'edit'),
  config:  alias('cluster.%%DRIVERNAME%%EngineConfig'),
  init() {
    /* !!!!!!!!!!!DO NOT CHANGE START!!!!!!!!!!!*/
    // This does on the fly template compiling, if you mess with this :cry:
    const decodedLayout = window.atob(LAYOUT);
    const template = Ember.HTMLBars.compile(decodedLayout, { moduleName: 'shared/components/cluster-driver/driver-%%DRIVERNAME%%/template' });

    set(this, 'layout', template);
    this._super(...arguments);
    /* !!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/
    const lang = get(this, 'session.language');

    get(this, 'intl.locale');
    this.loadLanguage(lang);

    // let config      = get(this, 'config');
    let config = get(this, 'cluster.%%DRIVERNAME%%EngineConfig');
    let configField = get(this, 'configField');

    if (!config) {
      // TODO config = get(this, 'globalStore').createRecord({
      config = this.get('globalStore').createRecord({
        type:              configField,
        secretKey:         '',
        clusterName:       '',
        vcnCidr:           '10.0.0.0/16',
        kubernetesVersion: 'v1.15.7',
        region:            'us-phoenix-1',
        vcn:               '',
        securityListId:    '',
        subnetAccess:      'public',
        cpu:               0,
        memory:            0,
        quantityPerSubnet: 1,
      });

      set(this, 'cluster.%%DRIVERNAME%%EngineConfig', config);
    }

    // init cpu and memory
    const {
      cpu,
      memory
    } = get(this, 'config');

    if (cpu && memory) {
      set(this, 'instanceConfig', `${ get(this, 'config.cpu') }/${ get(this, 'config.memory') }`);
    }
  },

  actions: {

    // TODO implement authenticateOCI

    authenticateOCI(cb) {
      setProperties(this, {

        'errors':                                       null,
        'cluster.%%DRIVERNAME%%EngineConfig.userOcid':  (get(this, 'cluster.%%DRIVERNAME%%EngineConfig.userOcid') || '').trim(),
        'cluster.%%DRIVERNAME%%EngineConfig.secretKey': (get(this, 'cluster.%%DRIVERNAME%%EngineConfig.secretKey') || '').trim(),
        'cluster.%%DRIVERNAME%%EngineConfig.privateKeyPassphrase':  (get(this, 'cluster.%%DRIVERNAME%%EngineConfig.privateKeyPassphrase') || '').trim(),
        'cluster.%%DRIVERNAME%%EngineConfig.region':    (get(this, 'cluster.%%DRIVERNAME%%EngineConfig.region')),

      });

      const errors = get(this, 'errors') || [];

      set(this, 'step', 2);
      cb(true);
    },

    // TODO re-implement loadNodeConfig
    loadNodeConfig(cb) {
      set(this, 'step', 3);
      cb(true);
    },

    // TODO implement loadInstanceConfig
    loadInstanceConfig(cb) {
      set(this, 'errors', null);
      set(this, 'step', 4);
      cb(true);
    },
    upgradeCluster(cb) {
      setProperties(this, { 'errors': null });

      const errors = get(this, 'errors') || [];
      const intl = get(this, 'intl');

      const quantityPerSubnet = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.quantityPerSubnet');
      const kubernetesVersion = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.kubernetesVersion');

      if (!quantityPerSubnet) {
        errors.push(intl.t('clusterNew.oke.quantityPerSubnet.required'));
      } else {
        const maxNodeCount = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.maxNodeCount');

        if (!/^\d+$/.test(quantityPerSubnet) || parseInt(quantityPerSubnet, 10) < 0 || parseInt(quantityPerSubnet, 10) > maxNodeCount) {
          errors.push(intl.t('clusterNew.oke.quantityPerSubnet.error', { max: maxNodeCount }));
        }
      }
      if (!kubernetesVersion) {
        errors.push(intl.t('clusterNew.oke.version.required'));
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb();

        return;
      }

      this.send('driverSave', cb);
    },
    save(cb) {
      setProperties(this, {
        'errors':        null,
        'otherErrors':   null,
        'clusterErrors': null,
      });

      const errors = get(this, 'errors') || [];

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb(false);

        return;
      }
      if (!this.validate()) {
        cb(false);

        return;
      }
      if (get(this, 'cluster.%%DRIVERNAME%%EngineConfig.nodeImage') == '') {
        set(this, 'cluster.%%DRIVERNAME%%EngineConfig.nodeImage', imageMap['Oracle-Linux-7.6']);
      }

      if (get(this, 'cluster.%%DRIVERNAME%%EngineConfig.subnetAccess') == 'public') {
        set(this, 'cluster.%%DRIVERNAME%%EngineConfig.enablePrivateNodes', false);
      } else {
        set(this, 'cluster.%%DRIVERNAME%%EngineConfig.enablePrivateNodes', true);
      }

      this.send('driverSave', cb);
    },
    cancel() {
      get(this, 'router').transitionTo('global-admin.clusters.index');
    },
    cpuAndMemoryChanged(item) {
      setProperties(this, {
        'config.cpu':    item.raw.cpuCount,
        'config.memory': item.raw.memoryCapacityInGB
      });
    }
  },

  // Any computed properties or custom logic can go here
  languageChanged: observer('intl.locale', function() {
    const lang = get(this, 'intl.locale');

    if (lang) {
      this.loadLanguage(lang[0]);
    }
  }),
  clusterNameChanged: observer('cluster.name', function() {
    const clusterName = get(this, 'cluster.name');
    set(this, 'cluster.%%DRIVERNAME%%EngineConfig.clusterName', clusterName);
  }),
  accessTitle: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.oke.access.title');
  }),
  accessDetail: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.oke.access.detail');
  }),
  clusterTitle: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.oke.cluster.title');
  }),
  clusterDetail: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.oke.cluster.detail');
  }),
  virtualCloudNetworkTitle: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.oke.vcn.title');
  }),
  virtualCloudNetworkDetail: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.oke.vcn.detail');
  }),
  instanceTitle: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.oke.instance.title');
  }),
  instanceDetail: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.oke.instance.detail');
  }),
  maxNodeCount: computed('clusterQuota.slave', () => {
    return 256;
  }),
  regionChoices: Object.entries(regionMap).map((e) => ({
    label: e[0],
    value: e[1]
  })),
  selectedRegion: computed('cluster.%%DRIVERNAME%%EngineConfig.region', function() {
    const region = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.region');

    return region;
  }),
  vcnChoices: Object.entries(vcnIdMap).map((e) => ({
    label: e[1],
    value: e[0]
  })),
  selectedVCN: computed('cluster.%%DRIVERNAME%%EngineConfig.vcnId', function() {
    const vcnId = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.vcnId');

    return vcnId && vcnIdMap[vcnId];
  }),
  subnetAccessChoices: Object.entries(subnetAccessMap).map((e) => ({
    label: e[1],
    value: e[0]
  })),
  selectedSubnetAccess: computed('cluster.%%DRIVERNAME%%EngineConfig.subnetAccess', function() {
    const subnetAccess = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.subnetAccess');

    return subnetAccess && subnetAccessMap[subnetAccess];
  }),
  nodeShapeChoices: Object.entries(nodeShapeMap).map((e) => ({
    label: e[1],
    value: e[0]
  })),
  selectednodeShape: computed('cluster.%%DRIVERNAME%%EngineConfig.nodeShape', function() {
    const nodeShape = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.nodeShape');

    return nodeShape && nodeShapeMap[nodeShape];
  }),
  imageChoices: Object.entries(imageMap).map((e) => ({
    label: e[1],
    value: e[0]
  })),
  selectedImage: computed('cluster.%%DRIVERNAME%%EngineConfig.nodeImage', function() {
    const nodeImage = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.nodeImage');

    return nodeImage && imageMap[nodeImage];
  }),
  k8sVersionChoices: Object.entries(k8sVersionMap).map((e) => ({
    label: e[1],
    value: e[0]
  })),
  k8sUpgradeVersionChoices: computed('cluster.%%DRIVERNAME%%EngineConfig.kubernetesVersion', function() {
    let supportedVersions = Object.assign({}, k8sVersionMap);
    var currentVersion = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.kubernetesVersion');

    var cv = currentVersion.split('.').map((v) => {
      return parseInt(v, 10);
    });

    const filtered = Object.keys(supportedVersions)
      .filter((key) => (!this.k8sUpgradableTo(currentVersion, key) == 1))
      .forEach((key) => delete supportedVersions[key]);

    return Object.entries(supportedVersions).map((e) => ({
      label: e[1],
      value: e[0]
    }));
  }),
  selectedk8sVersion: computed('cluster.%%DRIVERNAME%%EngineConfig.kubernetesVersion', function() {
    const k8sVersion = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.kubernetesVersion');
    return k8sVersion && k8sVersionMap[k8sVersion];
  }),
  canAuthenticate: computed('cluster.%%DRIVERNAME%%EngineConfig.tenancyId', 'cluster.%%DRIVERNAME%%EngineConfig.compartmentId', 'cluster.%%DRIVERNAME%%EngineConfig.userOcid', 'cluster.%%DRIVERNAME%%EngineConfig.fingerprint', 'cluster.%%DRIVERNAME%%EngineConfig.privateKeyContents', function() {
    return get(this, 'cluster.%%DRIVERNAME%%EngineConfig.tenancyId') && get(this, 'cluster.%%DRIVERNAME%%EngineConfig.compartmentId') && get(this, 'cluster.%%DRIVERNAME%%EngineConfig.userOcid') && get(this, 'cluster.%%DRIVERNAME%%EngineConfig.fingerprint') && get(this, 'cluster.%%DRIVERNAME%%EngineConfig.privateKeyContents') ? false : true;
  }),

  canSaveVCN: computed('vcnCreationMode', 'cluster.%%DRIVERNAME%%EngineConfig.vcnName', 'cluster.%%DRIVERNAME%%EngineConfig.loadBalancerSubnetName1', 'cluster.%%DRIVERNAME%%EngineConfig.loadBalancerSubnetName2', 'cluster.%%DRIVERNAME%%EngineConfig.subnetAccess', 'cluster.%%DRIVERNAME%%EngineConfig.vcnCidr', function() {
    const mode = get(this, 'vcnCreationMode');

    if (mode === 'Quick') {
      return false;
    } else if (mode === 'Existing') {
      // Driver will use the same compartment as the cluster if not set.
      return (get(this, 'cluster.%%DRIVERNAME%%EngineConfig.vcnName') && get(this, 'cluster.%%DRIVERNAME%%EngineConfig.loadBalancerSubnetName1')) ? false : true;
    } else if (mode === 'Custom') {
      return (get(this, 'cluster.%%DRIVERNAME%%EngineConfig.subnetAccess') && get(this, 'cluster.%%DRIVERNAME%%EngineConfig.vcnCidr')) ? false : true;
    }

    return true;
  }),
  canCreateCluster: computed('cluster.%%DRIVERNAME%%EngineConfig.nodeShape', function() {
    return get(this, 'cluster.%%DRIVERNAME%%EngineConfig.nodeShape') ? false : true;
  }),

  loadLanguage(lang) {
    const translation = languages[lang] || languages['en-us'];
    const intl = get(this, 'intl');

    intl.addTranslations(lang, translation);
    intl.translationsFor(lang);
    set(this, 'refresh', false);
    next(() => {
      set(this, 'refresh', true);
      set(this, 'lanChanged', +new Date());
    });
  },
  // Add custom validation beyond what can be done from the config API schema
  validate() {
    // Get generic API validation errors
    this._super();
    var errors = get(this, 'errors') || [];

    if (!get(this, 'cluster.name')) {
      errors.push('Name is required');
    }

    const tenancyId = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.tenancyId');

    if (!tenancyId.startsWith('ocid1.tenancy')) {
      errors.push('A valid tenancy OCID is required');
    }

    const compartmentId = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.compartmentId');

    if (!compartmentId.startsWith('ocid1.compartment')) {
      errors.push('A valid compartment OCID is required');
    }

    const userOcid = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.userOcid');

    if (!userOcid.startsWith('ocid1.user')) {
      errors.push('A valid user OCID is required');
    }

    // TODO Add more specific errors

    // Set the array of errors for display,
    // and return true if saving should continue.
    if (get(errors, 'length')) {
      set(this, 'errors', errors);

      return false;
    } else {
      set(this, 'errors', null);

      return true;
    }
  },

  k8sUpgradableTo(currVer, toVer) {
    if (typeof currVer !== 'string') {
      return false;
    }
    if (typeof toVer !== 'string') {
      return false;
    }

    currVer = currVer.substr(1);
    toVer = toVer.substr(1);
    currVer = currVer.split('.');
    toVer = toVer.split('.');

    var len = Math.max(currVer.length, toVer.length);

    for (var i = 0; i < len; i++) {
      if ((toVer[i] || 0) > (currVer[i] || 0)) {
        return true
      } else if ((toVer[i] || 0) < (currVer[i] || 0)) {
        return false
      }
    }

    return true;
  },
});
