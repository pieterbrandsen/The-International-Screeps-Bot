const config = require('./screeps.json')
const matchdep = require('matchdep')
const mergeFiles = require('./grunt-scripts/mergeFiles')

module.exports = function(grunt) {

    matchdep.filterAll(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks)
    mergeFiles(grunt)

    grunt.initConfig({
        screeps: {
            options: {
                email: config.email,
                password: config.password,
                branch: 'default',
                ptr: false,
            },
            dist: {
                src: ['dist/*.js']
            }
        },
        copy: {
            main: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                cwd: 'dist/',
                src: '**',
                dest: config.privateServer,
            },
        },
    })

    grunt.registerTask('mmo', ['mergeFiles', 'screeps'])
    grunt.registerTask('ps', ['mergeFiles', 'copy'])
}