$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate: '<div class="title">#title#</div>',
        labels: {
            previous : 'Back',
            next : '<i class="zmdi zmdi-arrow-right"></i>',
            finish : '',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            if (currentIndex === 2) { // Check if current step is the third step (index starts at 0)
                var platform = $('#platform').val();
                var projectSize = $('#projectSize').val();
                var responseTime = $('#responseTime').val();
                var scalability = $('#scalability').val();
                var availability = $('#availability').val();
                
                var natureDonnees = $('#natureDonnees').val();
                var volumeDonnees = $('#volumeDonnees').val();
                var exigencesPerformance = $('#exigencesPerformance').val();
                var disponibilite = $('#disponibilite').val();
                var augmentationCharge = $('#augmentationCharge').val();
                
                $('#platform-val').text(platform);
                $('#projectSize-val').text(projectSize);
                $('#responseTime-val').text(responseTime);
                $('#scalability-val').text(scalability);
                $('#availability-val').text(availability);
                
                $('#natureDonnees-val').text(natureDonnees);
                $('#volumeDonnees-val').text(volumeDonnees);
                $('#exigencesPerformance-val').text(exigencesPerformance);
                $('#disponibilite-val').text(disponibilite);
                $('#augmentationCharge-val').text(augmentationCharge);
                
                // Add code to update other values in the table
                
                $("#form-register").validate().settings.ignore = ":disabled,:hidden";
                return $("#form-register").valid();
            }
           
            return true;
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            if (currentIndex === $("#form-total").steps("getStepCount") - 1) {
                console.log("Bonjour");
                $(".actions ul").addClass("last-step");
            } else {
                $(".actions ul").removeClass("last-step");
            }
        }
    });
});
