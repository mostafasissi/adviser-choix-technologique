document.getElementById('form-register').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Obtenir les valeurs sélectionnées dans le formulaire
    var natureDonnees = document.getElementById('natureDonnees').value;
    var volumeDonnees = document.getElementById('volumeDonnees').value;
    var exigencesPerformance = document.getElementById('exigencesPerformance').value;
    var disponibilite = document.getElementById('disponibilite').value;
    var augmentationCharge = document.getElementById('augmentationCharge').value;
  
    // Obtenir la base de données recommandée en fonction des réponses
    var recommandation = getRecommendedDatabase(natureDonnees, volumeDonnees, exigencesPerformance, disponibilite, augmentationCharge);
  
    // Afficher la recommandation
    var recommendationDiv = document.getElementById('recommendation');
    recommendationDiv.innerHTML = recommandation ;
  });
  
  function getRecommendedDatabase(natureDonnees, volumeDonnees, exigencesPerformance, disponibilite, augmentationCharge) {
    var databases;
  
    if (natureDonnees === 'structured') {
      databases = structured_DB;
    } else if (natureDonnees === 'semi_structured') {
      databases = semi_structured_DB;
    } else if (natureDonnees === 'non_structured') {
      databases = non_structured_DB;
    }
  
    var filteredDatabases = databases.filter(function(db) {
      return db.dataSize >= getSizeValue(volumeDonnees) &&
        db[exigencesPerformance] >= 8 &&
        db.disponibiliteDonnees >= getAvailabilityValue(disponibilite) &&
        db.augmentationCharge >= parseInt(augmentationCharge);
    });
  
    if (filteredDatabases.length > 0) {
      return filteredDatabases[0].name;
    } else {
      return 'Aucune base de données recommandée pour les critères sélectionnés.';
    }
  }
  
  function getSizeValue(size) {
    if (size === 'small') {
      return 2;
    } else if (size === 'medium') {
      return 7;
    } else if (size === 'large') {
      return 9;
    }
  }
  
  function getAvailabilityValue(availability) {
    if (availability === 'haute') {
      return 8;
    } else if (availability === 'standard') {
      return 6;
    } else if (availability === 'tolerancePannes') {
      return 7;
    }
  }
  

  
let structured_DB = [
  {
    name: 'MySQL',
    dataSize: 7,
    rapidite: 8,
    requeteComplexe: 8,
    equilibrePerformance: 7,
    disponibiliteDonnees: 8,
    augmentationCharge: 7,
  },
  {
    name: 'PostgreSQL',
    dataSize: 8,
    rapidite: 9,
    requeteComplexe: 9,
    equilibrePerformance: 8,
    disponibiliteDonnees: 9,
    augmentationCharge: 8,
  },
  {
    name: 'SQLite',
    dataSize: 4,
    rapidite: 7,
    requeteComplexe: 6,
    equilibrePerformance: 7,
    disponibiliteDonnees: 6,
    augmentationCharge: 4,
  },
  {
    name: 'Microsoft SQL Server',
    dataSize: 9,
    rapidite: 9,
    requeteComplexe: 9,
    equilibrePerformance: 9,
    disponibiliteDonnees: 9,
    augmentationCharge: 9,
  },
  {
    name: 'MariaDB',
    dataSize: 7,
    rapidite: 8,
    requeteComplexe: 8,
    equilibrePerformance: 7,
    disponibiliteDonnees: 8,
    augmentationCharge: 7,
  },
  {
    name: 'Oracle',
    dataSize: 10,
    rapidite: 9,
    requeteComplexe: 10,
    equilibrePerformance: 9,
    disponibiliteDonnees: 10,
    augmentationCharge: 9,
  },
  {
    name: 'IBM DB2',
    dataSize: 9,
    rapidite: 9,
    requeteComplexe: 9,
    equilibrePerformance: 9,
    disponibiliteDonnees: 9,
    augmentationCharge: 8,
  },
];

let semi_structured_DB = [
  {
    name: 'Firebase Realtime Database',
    dataSize: 5,
    rapidite: 7,
    requeteComplexe: 6,
    equilibrePerformance: 8,
    disponibiliteDonnees: 7,
    augmentationCharge: 6,
  },
  {
    name: 'Elasticsearch',
    dataSize: 9,
    rapidite: 9,
    requeteComplexe: 9,
    equilibrePerformance: 9,
    disponibiliteDonnees: 9,
    augmentationCharge: 8,
  },
  {
    name: 'dynamodb',
    dataSize: 8,
    rapidite: 8,
    requeteComplexe: 9,
    equilibrePerformance: 8,
    disponibiliteDonnees: 8,
    augmentationCharge: 7,
  },
];

let non_structured_DB = [
  {
    name: 'MongoDB',
    dataSize: 9,
    rapidite: 9,
    requeteComplexe: 8,
    equilibrePerformance: 9,
    disponibiliteDonnees: 8,
    augmentationCharge: 9,
  },
  {
    name: 'Redis',
    dataSize: 6,
    rapidite: 7,
    requeteComplexe: 6,
    equilibrePerformance: 8,
    disponibiliteDonnees: 7,
    augmentationCharge: 6,
  },
  {
    name: 'Elasticsearch',
    dataSize: 9,
    rapidite: 9,
    requeteComplexe: 9,
    equilibrePerformance: 9,
    disponibiliteDonnees: 9,
    augmentationCharge: 8,
  },
  {
    name: 'Cassandra',
    dataSize: 10,
    rapidite: 9,
    requeteComplexe: 9,
    equilibrePerformance: 10,
    disponibiliteDonnees: 9,
    augmentationCharge: 9,
  },
  {
    name: 'Neo4j',
    dataSize: 8,
    rapidite: 7,
    requeteComplexe: 8,
    equilibrePerformance: 8,
    disponibiliteDonnees: 8,
    augmentationCharge: 7,
  },
  {
    name: 'Couchbase',
    dataSize: 8,
    rapidite: 8,
    requeteComplexe: 7,
    equilibrePerformance: 8,
    disponibiliteDonnees: 9,
    augmentationCharge: 8,
  },
  {
    name: 'CouchDB',
    dataSize: 7,
    rapidite: 7,
    requeteComplexe: 7,
    equilibrePerformance: 7,
    disponibiliteDonnees: 8,
    augmentationCharge: 7,
  },
];
